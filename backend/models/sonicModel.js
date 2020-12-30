const { Ingest, Search } = require('sonic-channel');

let channelIsAvailable = false;
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

channelSearch.connect({
  connected() {
    channelIsAvailable = true;
  }
})
channelIngest.connect({})

class SonicModel {
  static async insertMovie(id, data) {
    console.log("chan", channelIsAvailable);
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
