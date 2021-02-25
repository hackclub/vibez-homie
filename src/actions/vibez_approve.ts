import app from '../server'
import util from '../util'

const { airtable } = util


type VibezAction = {
  value: string
}


app.action('approve_button', async ({ body, action, ack, say, respond, client, logger, context }) => {
  await ack()

  const vibezAction: VibezAction = <any>action
  const vibezList = util.vibezCommandToList(vibezAction.value)
  const vibezText = util.vibezListToText(vibezList)

  // TODO: log vibez
  console.log(body, action)
  try {
    const record = {
      author_id: body.user.id,
      message_id: '', // FIXME
      vibez: JSON.stringify(vibezList),
      links: '', // FIXME
      radar: '', // FIXME
    }
    logger.info(record)
    await airtable.create(record);
  } catch (err) {
    console.error(err);
    return
  }

  try {
    await respond({
      response_type: 'in_channel',
      delete_original: true,
    })
    await respond({
      text: [
        `💾 Vibez logged for <@${body.user.id}>! 💽`,
        vibezText,
      ].join('\n'),
      response_type: 'in_channel',
      replace_original: false,
    })
  } catch (error) {
    logger.error('failed to update the context')
    logger.error(error)
  }
})
