import React from "react"
import styled from 'styled-components'

const WrapperCard = styled.div `
  display: block;
  flex-wrap: wrap;
  width: 15rem;
  font-family: 'Barlow', sans-serif;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, .1);
  transition: 0.3s;
  border-radius: 0.7rem;
  background-color: #2ED5B7;
  margin: 0.5rem;

  img {
    /* border-radius: 0.5rem; */
    border-radius: 0.7rem 0.7rem 0 0;
    width: 100%;
  }

  &:hover {
    box-shadow: 2px 8px 45px rgba(0, 0, 0, .15);
    transform: translate3D(0, -2px, 0);
  }
`


const WrapperDescription = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  overflow: hidden;

  h4 {
    align-self: flex-start;
    padding-bottom: 1em;
  }
`

function MovieCard({movie}) {
  if (!movie) return
  const description = movie.description.slice(0, 120) + '...'

  return (
    <WrapperCard>
      <img src={ movie.image } alt={ `Capa do filme ${ movie.name }` }/>
      <WrapperDescription>
        <h4><b>{ movie.name }</b></h4>
        <p>{ description }</p>
      </WrapperDescription>
    </WrapperCard>
  )
}

export default MovieCard
