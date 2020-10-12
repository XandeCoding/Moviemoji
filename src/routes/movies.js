const movieRouter = [];

movieRouter.push({ method: 'GET', path: '/', handler: async () => {
    return await Promise.resolve('Hello World!')
  }
})

module.exports = movieRouter
