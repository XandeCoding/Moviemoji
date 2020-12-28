const MovieModel = require('../models/movieModel')
const SonicModel = require('../models/sonicModel')

class MovieController {
  static async insertMovie(data) {
    try {
      const result = await MovieModel.insert(data)
      await SonicModel.insertMovie(result[0], data)
      return result
    } catch (error) {
      return error;
    }
  }

  static async getAllMovies() {
    try {
      return await MovieModel.getAll()
    } catch (error) {
      return error;
    }
  }

  static async getMovie(id) {
    try {
      return await MovieModel.get(id)
    } catch (error) {
      return error;
    }
  }

  static searchMovies(queryString) {
    return new Promise((resolve, reject) => {
      SonicModel.searchMovies(queryString).then((moviesFinded) => {
        const moviesPromise = moviesFinded.map((movie) => {
          return MovieModel.get(movie.split('id:')[1])
        })

        return Promise.all(moviesPromise).then(([moviesData]) => {
          return resolve(moviesData)
        });
      }).catch((error) => {
        reject(error)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  static async deleteMovie(id) {
    try {
      return await MovieModel.delete(id)
    } catch (error) {
      return error;
    }
  }

  static async updateMovie(id, data) {
    try {
      return await MovieModel.update(id, data)
    } catch (error) {
      return error;
    }
  }
}

module.exports = MovieController
