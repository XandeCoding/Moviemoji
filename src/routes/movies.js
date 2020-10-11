const movieRouter = [];

movieRouter.push({ method: 'GET', path: '/', handler: (request, h) => {
    return 'Hello World!'
  }
})

module.exports = movieRouter
