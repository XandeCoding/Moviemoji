const movieRouter = [];

movieRouter.push({
  method: 'POST',
  path: '/movies/{id}',
  handler: async () => { return 'teste' }
})

movieRouter.push({
  method: 'GET',
  path: '/movies/{id}',
  handler: async () => { return 'teste' }
})

movieRouter.push({
  method: 'DELETE',
  path: '/movies/{id}',
  handler: async () => { return 'teste' }
})

movieRouter.push({
  method: 'PUT',
  path: '/movies/{id}',
  handler: async () => { return 'teste' }
})


module.exports = movieRouter
