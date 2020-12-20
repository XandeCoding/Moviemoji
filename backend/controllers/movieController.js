const MovieModel = require('../models/movieModel')

class MovieController {
  static async insertMovie(data) {
    try {
      return await MovieModel.insert(data)
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
