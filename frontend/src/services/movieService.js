import environment from '../environment'
import buildUrl from 'build-url';

class MovieService {
  static getUrl(params, path) {
    return buildUrl(environment.apiUrl, {
      path: path ? `movies/${ path }` : 'movies',
      queryParams: params
    })
  }

  // TODO: add pagination
  static getMovies() {
    return new Promise((resolve, reject) => {
      return fetch(MovieService.getUrl(), {
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json'}
      }).then((response) => {
        if (response.status !== 200) return;

        return response.json().then((responseJson) => {
          return resolve(responseJson)
        }).catch((error) => { return reject(error) })
      }).catch((error) => { return reject(error) })
    })
  }

  static searchMovies(search) {
    return new Promise((resolve, reject) => {
      return fetch(MovieService.getUrl({ search }, 'search'), {
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json'}
      }).then((response) => {
        if (response.status !== 200) return;

        return response.json().then((responseJson) => {
          return resolve(responseJson)
        }).catch((error) => { return reject(error) })
      }).catch((error) => { return reject(error) })
    })
  }
}

export default MovieService