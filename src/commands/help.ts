import app from '../server'

import { helpTxt } from '../util/msgtxt'


app.command('/vibez-help', async ({ command, ack, say, respond }) => {
  await ack()
  await respond({
    response_type: 'ephemeral',
    blocks: [{
        type: 'section',
        text: {
          type: 'plain_text',
          text: helpTxt(command.user_name),
        },
      },
    ], // /blocks
  })

})

