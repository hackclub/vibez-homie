import app from '../server'

import { helpTxt } from '../util/msgtxt'


const vibezChannels = [
  'C01MEFSH34G', // #vibez
  'C01N19DKJNS', // #vibez-dev
]

app.event('member_joined_channel', async ({ event, client }) => {
  console.log('member_joined_channel', {event})
  if (!vibezChannels.includes(event.channel)) { return }
  try {
    console.log(result)
    const result = await client.chat.postEphemeral({
      channel: event.channel,
      user: event.user,
      text: helpTxt(event.user),
    })
  } catch (error) {
    console.error(error)
    const result = await client.chat.postEphemeral({
      channel: event.channel,
      user: event.user,
      text: `⚠️ something went wrong ⚠️`,
    })
  }
});
