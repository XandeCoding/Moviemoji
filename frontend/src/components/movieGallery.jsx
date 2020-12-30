import React, { useEffect } from "react"
import styled from 'styled-components'
import MovieService from "../services/movieService"
import MovieContainer from '../providers/movieContainer'
import MovieCard from '../components/movieCard'

const WrapperGallery = styled.div `
  display: flex;
  padding: 2rem;
  justify-content: space-evenly;

  input[type="text"]::placeholder {
    color: #fff;
}
`

function MovieGallery() {
  const MovieProvider = MovieContainer.useContainer()

  useEffect(() => {
    MovieService.getMovies().then((result) => {
      MovieProvider.addMovie(result)
    })
  }, [])

  return (
    <WrapperGallery>
        {
          MovieProvider.movies.map((movie) => <MovieCard
            movie={ movie } />)
        }
    </WrapperGallery>
  )
}

export default React.memo(MovieGallery)
