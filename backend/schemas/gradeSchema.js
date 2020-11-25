module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
      name: DataTypes.STRING,
      primaryEmoji: DataTypes.STRING,
      secondaryEmoji: DataTypes.STRING
    })
  
    return Movie
  }
  