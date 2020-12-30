import { useState } from "react"
import { createContainer } from "unstated-next"

function useMovies(initialState = []) {
    let [ movies, setMovies ] = useState(initialState)
    // TODO: WHEN ADD MOVIES ADD TOO A KEY IN A PROPS USING UUID
    let addMovie = (movieToAdd) => setMovies(movies.concat(movieToAdd))
    let removeMovie = (movieToRemove) => setMovies(
        movies.filter((movie) => { return movie.id !== movieToRemove.id })
    )

    return { movies, addMovie, removeMovie }
}

const MoviesContainer = createContainer(useMovies)

export default MoviesContainer
