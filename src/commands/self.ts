import app from '../server'


app.command('/vibez-self', async ({ command, ack, say, respond }) => {
  await ack()
  await respond({
    text: `{this will be your radar chart}`,
    response_type: 'ephemeral',
  })
})
