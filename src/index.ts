import { App } from "@slack/bolt";

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

// Listens to incoming messages that contain "vibez"
app.message("vibez", async ({ message, say }) => {
  if ("user" in message) {
    // Not all messages have a user
    console.log("we should be vibing in here");
    await say(`vibez <@${message.user}>.. vibez ✌🏾😌🤘🏾`);
  }
});

app.command('/vibez-help', async ({ command, ack, say, respond }) => {
  await ack();
  await respond({
    text: `Hey homie! Here's some help :).
    This is the #vibez channel. Here we all post things about how we’re feeling.
    Type out a list of adjectives and inlcude an image or song link, and send it.
    I’ll keep track of how you feel over time and you will be able to share that if you like.`,
    response_type: 'ephemeral',
  });
});

app.command('/vibez-self', async ({ command, ack, say, respond }) => {
  await ack();
  await respond({
    text: `{this will be your radar chart}`,
    response_type: 'ephemeral',
  });
});

app.command('/vibez-channel', async ({ command, ack, say, respond }) => {
  await ack();
  await respond({
    text: `{this will be the channel's radar chart}`,
    response_type: 'ephemeral',
  });
});

async function main() {
  // Start the app
  await app.start(process.env.PORT ? parseInt(process.env.PORT) : 3000);
  console.log("⚡️ Bolt app is running!");
}

main();
