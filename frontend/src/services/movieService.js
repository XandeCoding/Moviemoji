import environment from '../environment'

class MovieService {
  static getUrl() {
    return `${environment.apiUrl}/movies`
  }

  // TODO: add pagination
  static getMovies() {
    return new Promise((resolve, reject) => {
      return fetch(MovieService.getUrl(), {
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json'},
      }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
          return resolve(responseJson)
      }).catch((error) => { return reject(error) })
    })
  }
}

export default MovieService