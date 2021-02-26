import app from '../server'
import util from '../util'
import { SlashCommand, SlackAction } from '@slack/bolt'

const { airtable } = util


type VibezAction = SlackAction & {
  value: string
}

type VibezActionValue = {
  command: SlashCommand
  //user:
}


app.action('approve_button', async ({ body, action, ack, say, respond, client, logger, context }) => {
  await ack()

  const actionValue: VibezActionValue = JSON.parse((<VibezAction>action).value)
  const { command } = actionValue

  const vibezList = util.vibezCommandToList(command.text)
  const vibezText = util.vibezListToText(vibezList)

  try {
    const record = {
      user_id:      command.user_id,
      user_name:    command.user_name,
      channel_id:   command.channel_id,
      channel_name: command.channel_name,
      command:      command.command,
      vibez:        JSON.stringify(vibezList),
      links:        '', // FIXME
      radar:        '', // FIXME
    }
    await airtable.create(record)
  } catch (err) {
    return; logger.error(err)
  }

  try {
    await respond({
      response_type: 'in_channel',
      delete_original: true,
    })
    await respond({
      response_type: 'in_channel',
      replace_original: false,
      text: [
        `💾 Vibez logged for <@${body.user.id}>! 💽`,
        vibezText,
      ].join('\n'),
    })
  } catch (error) {
    logger.error('failed to update the context')
    logger.error(error)
  }
})
