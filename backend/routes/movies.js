const Database = require('../configs/database')

const movieRouter = [];

movieRouter.push({
  method: 'GET',
  path: '/movies/:id',
  handler: async () => Database.Model('Movie').create({ nome: 'teste' })
})


module.exports = movieRouter
