// helper functions
import AirtablePlus from 'airtable-plus'


const airtable_conf = {
  apiKey: process.env.AIRTABLE_API_KEY,
  baseID: process.env.AIRTABLE_API_BASE,
  tableName: 'messages',
}

const airtable = new AirtablePlus(airtable_conf)


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
  vibezCommandToList,
  airtable,
}
