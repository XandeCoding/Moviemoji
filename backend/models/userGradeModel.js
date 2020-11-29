const { Model } = require('objection')

class UserGrades extends Model {
  static get tableName() {
    return 'userGrades'
  }
}

module.exports = UserGrades
