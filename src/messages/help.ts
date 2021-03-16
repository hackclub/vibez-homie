import app from '../server'

import { helpTxt } from '../util/msgtxt'


const vibezChannels = [
  'C01MEFSH34G', // #vibez
  'C01N19DKJNS', // #vibez-dev
]

app.event('member_joined_channel', async ({ event, client }) => {
  if (!vibezChannels.includes(event.channel)) { return }
  try {
    const result = await client.chat.postMessage({
      channel: 'C01MEFSH34G',
      text: helpTxt(event.user),
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});
