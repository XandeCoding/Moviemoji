import { useState } from "react"
import { createContainer } from "unstated-next"

function useMovies(initialState = []) {
    const [ movies, setMovies ] = useState(initialState)
    
    const addMovies = (moviesToAdd) => {
        setMovies(movies.concat(moviesToAdd))
    }

    const setAllMovies = (moviesToSet) => {
        setMovies(moviesToSet)
    }

    const removeMovie = (movieToRemove) => setMovies(
        movies.filter((movie) => { return movie.id !== movieToRemove.id })
    )

    return { movies, addMovies, setAllMovies, removeMovie }
}

const MoviesContainer = createContainer(useMovies)

export default MoviesContainer
