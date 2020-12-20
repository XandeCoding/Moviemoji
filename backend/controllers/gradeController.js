const GradeModel = require('../models/gradeModel')

class GradeController {
  static async insertGrade(data) {
    try {
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

  static async deleteGrade(id) {
    try {
      return await GradeModel.delete(id)
    } catch (error) {
      return error;
    }
  }

  static async updateGrade(id, data) {
    try {
      return await GradeModel.update(id, data)
    } catch (error) {
      return error;
    }
  }
}

module.exports = GradeController
