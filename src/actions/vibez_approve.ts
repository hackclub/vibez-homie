import app from '../server'
import util from '../util'


type VibezAction = {
  value: string
}


app.action('approve_button', async ({ body, action, ack, say, respond, client, logger, context }) => {
  const vibezAction: VibezAction = <any>action
  const vibezList = util.vibezCommandToList(vibezAction.value)
  const vibezText = util.vibezListToText(vibezList)
  await ack()

  // TODO: log vibez

  try {
    await respond({
      text: [
        `💾 Vibez logged for <@${body.user.id}>! 💽`,
        vibezText,
      ].join('\n'),
      response_type: 'in_channel',
      replace_original: true,
    })
  } catch (error) {
    logger.error('failed to update the context')
    logger.error(error)
  }
})
