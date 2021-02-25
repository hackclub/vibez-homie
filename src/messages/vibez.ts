import app from '../server'


// Listens to incoming messages that contain 'vibez'
app.message(/vibez/i, async ({ message, say, logger }) => {
  logger.info('❗ vibe echo ❗')
  if ('user' in message) { // Not all messages have a user
    console.log('we should be vibing in here')
    await say(`vibez <@${message.user}>.. vibez ✌🏾😌🤘🏾`)
  }
})
