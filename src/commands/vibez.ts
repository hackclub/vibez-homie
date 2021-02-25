import app from '../server'
import util from '../util'


app.command('/vibez', async ({ command, ack, say, respond }) => {
  await ack()
  console.log({command})

  const vibezList = util.vibezCommandToList(command.text)
  const vibezText = util.vibezListToText(vibezList)

  console.log({vibezList, vibezText})
  console.log(command)

  if (vibezList.length > 0) {

    await respond(
      {
        response_type: 'ephemeral',
        replace_original: true,
        blocks: [

          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: [
                `👋🏾 Hey <@${command.user_name}>! So, you're feelin':`,
                vibezText,
              ].join('\n'),
            },
          },

          {
            type: 'actions',
            elements: [
              {
                type: 'button',
                style: 'primary',
                value: JSON.stringify({
                  command,
                }),
                action_id: 'approve_button',
                text: {
                  type: 'plain_text',
                  emoji: true,
                  text: 'Approve',
                },
              },
              {
                type: 'button',
                style: 'danger',
                action_id: 'cancel_button',
                text: {
                  type: 'plain_text',
                  emoji: true,
                  text: 'Cancel'
                },
              },
            ],
          },

        ],
      })

  } else {
    await respond({
      text: [
        `❗ Error! 🚧`,
        `Please post your vibez as a *comma separated list*.`,
        `Thanks!`,
      ].join('\n'),
      response_type: 'ephemeral',
      replace_original: true,
    })
  }

})
