import app from '../server'


app.command('/vibez-channel', async ({ command, ack, say, respond }) => {
  await ack()
  await respond({
    text: `{this will be the channel's radar chart}`,
    response_type: 'ephemeral',
  })
})
