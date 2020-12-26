const Hapi = require('@hapi/hapi')
const { join } = require('path')
const wurst = require('wurst');

let isInitialized = false;
const server = Hapi.server({
  port: 3000
})

exports.start = async (justInitialize = false) => {
  if (!isInitialized) {
    await server.register({
      plugin: wurst,
      options: {
        cwd: join(__dirname, 'routes')
      }
    })

    if (justInitialize) {
      await server.initialize();
    } else {
      await server.start();
    }

    console.log(`Server running at: ${server.info.uri}`);
    isInitialized = true;
  }
  return server;
};

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})
