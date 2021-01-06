const environment = {
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://postgres:moviemoji@127.0.0.1:5432/postgres',
  SONIC_URL: process.env.SONIC_URL || 'localhost'
}

module.exports = environment
