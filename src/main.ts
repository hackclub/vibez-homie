import app from './server'


export default async function main() {
  await app.start(process.env.PORT ? parseInt(process.env.PORT) : 3000)
  console.log('⚡️ Bolt app is running!')
}
