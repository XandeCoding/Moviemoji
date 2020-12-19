const Hapi = require('@hapi/hapi')
const { join } = require('path')
const HapiRouter = require('hapi-auto-route')

const server = Hapi.server({
  port: 3000,
  host: '0.0.0.0'
})

const init = async () => {
  await server.register({
    plugin: HapiRouter,
    options: {
      routes_dir: join(__dirname, 'routes'),
      use_prefix: false
    }
  })


  await server.start()

  console.log('Server running on ', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
