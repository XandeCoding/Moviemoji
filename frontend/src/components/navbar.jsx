import React from "react"
import styled from 'styled-components'
import Search from './search'

const BackgroundNav = styled.div `
  position: absolute;
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 4rem;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-top: 0;
  background: #2ED5B7;
  padding: 0rem 2rem;
`

const AppName = styled.span `
  display: flex;
  font-size: 24px;
  align-self: center;
  color: #fff;
`

const EndPosition = styled.section `
  display: flex;
  justify-content: space-between;
  width: fit-content;
  margin-left: auto;
  align-self: center;
`

const LoginButton = styled.button `
  background-color: #2ED5B7;
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  width: fit-content;
  padding: 0.3rem 1.2rem;
  margin: 0 1.5rem;
  color: #fff;
`

const SignUpButton = styled.button `
  background-color: #28bba1;
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  width: fit-content;
  padding: 0.3rem 1.2rem;
  color: #fff;
`

function Navbar() {
  return (
    <BackgroundNav>
      <AppName>Moviemoji</AppName>
      <EndPosition>
        <Search />
        <LoginButton> Entrar </LoginButton>
        <SignUpButton> Cadastrar </SignUpButton>
      </EndPosition>
    </BackgroundNav>
  )
}

export default Navbar
