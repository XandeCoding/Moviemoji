import React from "react"
import styled from 'styled-components'
import MovieContainer from '../providers/movieContainer'
import Navbar from '../components/navbar'
import SelectGender from '../components/selectGender'
import MovieGallery from '../components/movieGallery'

const TitleBarWrapper = styled.div `
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;
  padding: 0rem 2rem;
`
const Title = styled.h1 `
  color: #28bba1;
  font-weight: 500;
`

const BorderBottom = styled.div `
  display: block;
  width: 100%;
  margin-top: 1rem;
  border-bottom: 1px solid #A4B0BE;
`

function Home() {

  return (
    <MovieContainer.Provider>
      <>
        <Navbar />
        <TitleBarWrapper>
          <Title>Filmes em Alta</Title>
          <SelectGender />
        </TitleBarWrapper>
        <BorderBottom />
        <MovieGallery />
      </>
    </MovieContainer.Provider>
  )
}

export default Home