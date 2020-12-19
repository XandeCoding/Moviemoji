const Knex = require('knex')
const path = require('path')

const options = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.join(__dirname, '/../../dev.sqlite3')
  }
}

const Database = Knex(options)

module.exports = Database
