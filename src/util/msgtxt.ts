export function helpTxt(user_name: string): string {
  return [
    `👋🏾 'sup, <@${user_name}>! Welcome to the #vibez channel 🥳`,
    `Hey homie! Here's some help :).`,
    `In this channel, we all post things about how we’re feeling.`,
    `Type out a list of adjectives, maybe inlcude an image or song link, and send it over.`,
    `I’ll keep track of how you feel over time, and (soon!) you will be able to share that if you like.`,
    'Get this message again with `/vibez-help`',
    '',
    "Try `/vibez salty, silly, turquoise` to give it a shot ✌🏾. See ya around .. 👋🏾",
    '',
    'P.S. - Get this message again with `/vibez-help`',
  ].join('\n')
}
