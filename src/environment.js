const environment = {
  DATABASE_USERNAME: process.env.DATABASE_PASSWORD || 'postgres',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'moviemoji',
  DATABASE_URL: process.env.DATABASE_URL || '127.0.0.1',
  DATABASE_PORT: process.env.DATABASE_PORT || '5432',
  DATABASE_NAME: process.env.DATABASE_NAME || 'postgres'
}

module.exports = environment
