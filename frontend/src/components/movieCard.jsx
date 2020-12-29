import React from "react"
import styled from 'styled-components'

const WrapperCard = styled.div `
  display: flex;
  text-align: center;
  align-self: center;
  justify-content: flex-end;
`

function MovieCard({movie}) {
  if (!movie) return

  return (
    <span>{ movie.id }</span>
  )
}

export default MovieCard
