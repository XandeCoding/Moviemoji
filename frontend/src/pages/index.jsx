import React from "react"
import styled from 'styled-components'
import Navbar from '../components/navbar'
import SelectGender from '../components/selectGender'

const TitleBarWrapper = styled.div `
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 8.5rem;
  padding: 0rem 2rem;
`
const Title = styled.h1 `
  color: #28bba1;
  font-weight: 500;
`

const BorderBottom = styled.div `
  display: block;
  width: 100%;
  position: absolute;
  margin-top: 12.5rem;
  border-bottom: 1px solid #A4B0BE;
`


function Home() {
  return (
  <div>
    <Navbar />
    <TitleBarWrapper>
      <Title>Filmes em Alta</Title>
      <SelectGender />
    </TitleBarWrapper>
    <BorderBottom />
  </div>
  )
}

export default Home