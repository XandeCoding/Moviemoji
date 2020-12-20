const UserModel = require('../models/userModel')

class UserController {
  static async insertUser(data) {
    try {
      return await UserModel.insert(data)
    } catch (error) {
      return error
    }
  }
}

module.exports = UserController
