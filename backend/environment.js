const environment = {
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://postgres:moviemoji@postgres-api:5432/postgres'
}

module.exports = environment
