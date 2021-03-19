import { GenericMessageEvent } from '@slack/bolt'
import app from '../server'


// Listens to incoming messages that contain 'vibez'
app.message(/vibez/i, async ({ message, say, logger }) => {
  logger.info('❗ vibe echo ❗')
  if ('user' in message) { // Not all messages have a user FIXME
    const _message = message as GenericMessageEvent
    const thread_ts = _message.thread_ts || _message.ts
    await say({
      text: `vibez <@${message.user}>.. vibez ✌🏾😌🤘🏾`,
      thread_ts
    })
  }
})
