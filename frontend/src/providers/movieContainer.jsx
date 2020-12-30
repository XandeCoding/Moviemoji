import { useState } from "react"
import { createContainer } from "unstated-next"

function useMovies(initialState = []) {
    let [ movies, setMovies ] = useState(initialState)
    // TODO: WHEN ADD MOVIES ADD TOO A KEY IN A PROPS USING UUID
    // ADD FUNCTION TO CLEAR STATE TO RESOLVE BUGS BECAUSE WITHOUT OF KEY
    let addMovie = (movieToAdd) => setMovies(movies.concat(movieToAdd))
    let searchedMovies = (moviesSearched) => {
        const moviesToUpdate = moviesSearched.filter((movieSearched) => {
            return movies.some((actualMovie) => {
                return actualMovie.id === movieSearched.id
            })
        })

        setMovies(moviesToUpdate)
    }
    let removeMovie = (movieToRemove) => setMovies(
        movies.filter((movie) => { return movie.id !== movieToRemove.id })
    )

    return { movies, addMovie, searchedMovies, removeMovie }
}

const MoviesContainer = createContainer(useMovies)

export default MoviesContainer
