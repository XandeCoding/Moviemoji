const Hapi = require('@hapi/hapi')
const { join } = require('path')
const HapiRouter = require('hapi-auto-route')
const HapiSequelize = require('hapi-sequelizejs')
const { Sequelize } = require('sequelize')
const environment = require('./environment')

const server = Hapi.server({
  port: 3000,
  host: '0.0.0.0'
})

const sequelizeDB = new Sequelize(environment.DATABASE_URL)
const init = async () => {
  await server.register([
    {
      plugin: HapiSequelize,
      options: [
        {
          name: 'moviemoji',
          models: [join(__dirname, '/schemas/**/*.js')],
          sequelize: sequelizeDB,
          sync: true,
          forceSync: true
        }
      ]
    }
  ])

  await server.register({
    plugin: HapiRouter,
    options: {
      routes_dir: join(__dirname, 'routes'),
      use_prefix: false
    }
  })

  await server.start()

  // Todo: remove these console logs
  try {
    await sequelizeDB.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  console.log('Server running on ', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
