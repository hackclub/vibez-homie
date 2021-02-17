const { App } = require('@slack/bolt')

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
})

async function vibezHomie() { // Start the app
  await app.start(process.env.PORT || 3000)
  console.log('⚡️ Bolt app is running!')
}

// Listens to incoming messages that contain "hello"
app.message('vibez', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  console.log('we should be vibing in here')
  await say(`vibez <@${message.user}>.. vibez ✌🏾😌🤘🏾`)
})

vibezHomie()
