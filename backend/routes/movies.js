const MovieController = require('../controllers/movieController');

const movieRouter = [];

movieRouter.push({
  method: 'POST',
  path: '/movies',
  handler: async (req, res) => {
    const { payload } = req;

    return res.response(await MovieController.insertMovie(payload)).code(200);
  }
})

movieRouter.push({
  method: 'GET',
  path: '/movies/{id?}',
  handler: async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return res.response(await MovieController.getAllMovies()).code(200)
    }

    return res.response(await MovieController.getMovie(id)).code(200)
  }
})

movieRouter.push({
  method: 'DELETE',
  path: '/movies/{id}',
  handler: async (req, res) => {
    const { id } = req.params

    return res.response(await MovieController.deleteMovie(id)).code(200)
  }
})

movieRouter.push({
  method: 'PUT',
  path: '/movies/{id}',
  handler: async (req, res) => {
    const { id } = req.params
    const { payload } = req

    return res.response(await MovieController.updateMovie(id, payload)).code(200)
  }
})


module.exports = movieRouter
