import app from '../server'


app.action('cancel_button', async ({ body, ack, say, respond, client, logger, action, }) => {
  await ack()
  try {
    await respond({
      response_type: 'in_channel',
      delete_original: true,
    })
  } catch (error) {
    logger.error(error)
  }
})
