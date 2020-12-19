const movieRouter = [];

movieRouter.push({
  method: 'GET',
  path: '/movies/{id}',
  handler: async () => { return 'teste' }
})


module.exports = movieRouter
