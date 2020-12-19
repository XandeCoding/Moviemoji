const movieRouter = [];

movieRouter.push({
  method: 'GET',
  path: '/',
  handler: async () => { return 'teste' }
})


module.exports = movieRouter
