import app from './server'


export default async function main() {
  const { HOST, PORT, NODE_ENV } = process.env
  await app.start({
    host: HOST,
    port: (PORT ? parseInt(PORT) : 3000),
  })
  console.log(`⚡️ Bolt app is running on '${HOST}:${PORT}' in mode='${NODE_ENV}'!`)
}
