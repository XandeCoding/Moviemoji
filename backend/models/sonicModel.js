const { Ingest, Search } = require('sonic-channel');
const environment = require('../configs/environment');

let channelIsAvailable = false;
const { SONIC_URL } = environment;

const channelIngest = new Ingest({
  host: SONIC_URL,
  port: 1491,
  auth: 'SecretPassword'
})
const channelSearch = new Search({
  host: SONIC_URL,
  port: 1491,
  auth: 'SecretPassword'
})

channelSearch.connect({
  connected() {
    channelIsAvailable = true;
  }
})
channelIngest.connect({})

class SonicModel {
  static async insertMovie(id, data) {
    if (!channelIsAvailable) return false;

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
