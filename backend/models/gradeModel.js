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
      return error;
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

  static async update(id, data) {
    try {
      return await Database(GradeModel.getTableName())
        .where({ id })
        .limit(1)
        .update(data)
    } catch (error) {
      return error
    }
  }
}

module.exports = GradeModel