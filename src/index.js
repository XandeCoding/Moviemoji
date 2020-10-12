const Hapi = require('@hapi/hapi')
const Path = require('path')
const HapiRouter = require('hapi-auto-route')
const HapiSequelize = require('hapi-sequelizejs')
const { Sequelize } = require('sequelize')

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})

const init = async () => {
  // Todo: put this database URI in environment file
  // Todo: create a environment file
  const sequelizeDB = new Sequelize('postgres://postgres:moviemoji@127.0.0.1:5432/postgres')

  await server.register([
    {
      plugin: HapiSequelize,
      options: [
        {
          name: 'moviemoji',
          models: [__dirname +'/schemas/**/*.js'],
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
      routes_dir: Path.join(__dirname, 'routes'),
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
