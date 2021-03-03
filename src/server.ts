import { App, LogLevel, SocketModeReceiver, ExpressReceiver } from '@slack/bolt'
import fs from 'fs'
import util from 'util'
import path from 'path'


const writeFile = util.promisify(fs.writeFile)

const ENV = process.env

const appOptions: any = {
  signingSecret: ENV.SIGNING_SECRET,
  //appId: ENV.APP_ID,
  //clientId: ENV.CLIENT_ID,
  //clientSecret: ENV.CLIENT_SECRET,
  //stateSecret: ENV.STATE_SECRET,
}
if (ENV.NODE_ENV === 'development') {
  // FIXME: make oauth work for dev

  const clientOptions = {
    //slackApiUrl: 'https://dev.slack.com/api/',
  }

  //appOptions.clientOptions = clientOptions
  appOptions.socketMode = false
  appOptions.appToken = ENV.APP_TOKEN
  appOptions.token = ENV.BOT_TOKEN

  const socketModeReceiver = new SocketModeReceiver({
    appToken: process.env.APP_TOKEN ?? '',
    installerOptions: {
      authorizationUrl: 'https://dev.slack.com/oauth/v2/authorize',
      clientOptions,
    },
  })

  console.log(process.cwd())
  const __dirname = path.resolve(path.dirname(''))
  const dbFileName = `${__dirname}/.devdb.json`
  let dbFile = '{}'
  let db: any = {installation: {team: {}}}
  try {
    dbFile = fs.readFileSync(dbFileName, 'utf8')
    db = JSON.parse(dbFile)
  } catch {
    throw new Error(`can't load db`)
  }

  const receiver: any = new ExpressReceiver({
    //clientId: ENV.CLIENT_ID,
    signingSecret: ENV.SIGNING_SECRET ?? '',
    clientSecret: ENV.CLIENT_SECRET,
    stateSecret: ENV.STATE_SECRET,
    scopes: ['channels:read', 'chat:write', 'app_mentions:read', 'channels:manage', 'commands'],
    logLevel: LogLevel.DEBUG,
    endpoints: '/slack/events',
    installationStore: {
      storeInstallation: async (installation: any) => {
        console.log(db.installation, installation)
        db.installation.team[installation.team.id] = installation
        await writeFile(dbFileName, JSON.stringify(db, null, 2)); return installation
      },
      fetchInstallation: async (installQuery: any) => {
        console.log(installQuery)
        if (installQuery.teamId !== undefined) {
          return db.installation.team[installQuery.teamId]
        } else {
          throw new Error('Failed fetching installation')
        }
      },
    },
  })

} else {
  appOptions.token = ENV.BOT_TOKEN
}

const app = new App(appOptions)

export default app
