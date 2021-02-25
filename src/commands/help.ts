import app from '../server'


app.command('/vibez-help', async ({ command, ack, say, respond }) => {
  await ack()
  await respond({
    text: `Hey homie! Here's some help :).
    This is the #vibez channel. Here we all post things about how we’re feeling.
    Type out a list of adjectives and inlcude an image or song link, and send it.
    I’ll keep track of how you feel over time and you will be able to share that if you like.`,
    response_type: 'ephemeral',
  })
})
