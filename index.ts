import { App } from "@slack/bolt"

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
})

// Listens to incoming messages that contain "vibez"
app.message("vibez", async ({ message, say }) => {
    if ("user" in message) { // Not all messages have a user
        console.log("we should be vibing in here")
        await say(`vibez <@${message.user}>.. vibez ✌🏾😌🤘🏾`)
    }
})

async function main() { // Start the app
    await app.start(process.env.PORT ? parseInt(process.env.PORT) : 3000)
    console.log("⚡️ Bolt app is running!")
}

main()