const GradeModel = require('../models/gradeModel')

class GradeController {
  static async insertGrade(data) {
    try {
      if (GradeModel.checkIfUserVotedInMovie(data.movieId, data.userId)) {
        return null;
      }
      return await GradeModel.insert(data)
    } catch (error) {
      return error;
    }
  }

  static async getAllGrades() {
    try {
      return await GradeModel.getAll()
    } catch (error) {
      return error;
    }
  }

  static async getGrade(id) {
    try {
      return await GradeModel.get(id)
    } catch (error) {
      return error;
    }
  }

  static async getGradeByMovie(movieId) {
    try {
      return await GradeModel.getByMovie(movieId)
    } catch (error) {
      return error
    }
  }

  static async deleteGrade(id) {
    try {
      return await GradeModel.delete(id)
    } catch (error) {
      return error;
    }
  }

  static async updateGrade(data) {
    try {
      return await GradeModel.update(data.movieId, data.userId, data)
    } catch (error) {
      return error;
    }
  }
}

module.exports = GradeController
