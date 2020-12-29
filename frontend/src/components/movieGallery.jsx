import React, { useEffect } from "react"
import styled from 'styled-components'
import MovieService from "../services/movieService"
import MovieContainer from '../providers/movieContainer'
import MovieCard from '../components/movieCard'

const WrapperCard = styled.div `
  display: flex;
  text-align: center;
  align-self: center;
  justify-content: flex-end;

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
    <WrapperCard>
        {
          MovieProvider.movies.map((movie) => <MovieCard
            movie={ movie } />)
        }
    </WrapperCard>
  )
}

export default React.memo(MovieGallery)
