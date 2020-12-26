const UserModel = require('../models/userModel')

class UserController {
  static async insertUser(data) {
    try {
      return await UserModel.insert(data)
    } catch (error) {
      return error
    }
  }

  static async getUser(id) {
    try {
      return await UserModel.get(id)
    } catch (error) {
      return error;
    }
  }

  static async deleteUser(id) {
    try {
      return await UserModel.delete(id)
    } catch (error) {
      return error;
    }
  }

  static async updateUser(id, data) {
    try {
      return await UserModel.update(id, data)
    } catch (error) {
      return error;
    }
  }

}

module.exports = UserController
