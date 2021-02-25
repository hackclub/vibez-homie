// helper functions


const vibezListToText = (vibezList: string[]) => {
  const vibezSep = '• '
  return vibezList.map(x => (
    `${vibezSep} ${x}`
  )).join('\n') 
}


const vibezCommandToList = (vibezText: string) => {
  return vibezText
    .split(',')
    .map(x => x.trim())
    .filter(x => x.length > 0)
}


export default {
  vibezListToText,
  vibezCommandToList
}
