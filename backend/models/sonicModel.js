const { v4: uuid } = require('@lukeed/uuid');

const { Ingest, Search } = require('sonic-channel');

const channelIngest = new Ingest({
  host: 'localhost',
  port: 1491,
  auth: 'SecretPassword'
})
const channelSearch = new Search({
  host: 'localhost',
  port: 1491,
  auth: 'SecretPassword'
})

channelSearch.connect({})
channelIngest.connect({})

class SonicModel {
  static async insertMovie(id, data) {
    try {
      return await channelIngest.push(
        'movies',
        'default',
        `id:${id}`,
        `${data.name} ${data.description} ${data.gender}`,
        {
          lang: 'por'
        }
      )
    } catch (error) {
      return error
    }
  }

  static async searchMovies(queryString) {
    try {
      return await channelSearch.query(
        'movies',
        'default',
        queryString,
        { lang: 'por' }
      )
    } catch (error) {
      return error;
    }
  }
}

module.exports = SonicModel
