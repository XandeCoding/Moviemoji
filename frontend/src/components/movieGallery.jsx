import React, { useEffect } from "react"
import styled from 'styled-components'
import MovieService from "../services/movieService"
import MovieContainer from '../providers/movieContainer'
import MovieCard from '../components/movieCard'

const WrapperGallery = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1.5rem;

  input[type="text"]::placeholder {
    color: #fff;
}
`

function MovieGallery() {
  const MovieProvider = MovieContainer.useContainer()

  useEffect(() => {
    MovieService.getMovies().then((result) => {
      MovieProvider.setAllMovies(result)
    })
  }, [])

  return (
    <WrapperGallery>
        {
          MovieProvider.movies.map((movie) => <MovieCard
            key={ movie.id }
            movie={ movie }
          />)
        }
    </WrapperGallery>
  )
}

export default MovieGallery
