const Database = require('../configs/database')

class GradeModel {
  static getTableName() {
    return 'grades'
  }

  static async insert(data) {
    try {
      return await Database(GradeModel.getTableName())
        .insert(data)
    } catch (error) {
      return error;
    }
  }

  static async getAll() {
    try {
      return await Database(GradeModel.getTableName())
    } catch (error) {
      return error
    }
  }

  static async get(id) {
    try {
      return await Database(GradeModel.getTableName())
        .where({ id })
        .select('*')
        .limit(1)
    } catch (error) {
      return error
    }
  }

  static async getByMovie(movieId) {
    try {
      return await Database(GradeModel.getTableName())
        .where({ movieId })
        .select('*')
    } catch (error) {
      return error
    }
  }

  static async delete(id) {
    try {
      return await Database(GradeModel.getTableName())
        .where({ id })
        .limit(1)
        .del()
    } catch (error) {
      return error
    }
  }

  static async update(movieId, userId, data) {
    try {
      return await Database(GradeModel.getTableName())
        .where({ movieId, userId })
        .limit(1)
        .update(data)
    } catch (error) {
      return error
    }
  }

  static async checkIfUserVotedInMovie(movieId, userId) {
    try {
      return await Database(GradeModel.getTableName())
        .where({ movieId, userId })
        .limit(1)
        .select('*')
    } catch (error) {
      return error
    }
  }
}

module.exports = GradeModel
