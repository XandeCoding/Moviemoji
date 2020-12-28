import React from "react"
import styled from 'styled-components'
import { SearchAlt2 } from '@styled-icons/boxicons-regular'


const WrapperSearch = styled.div `
  display: flex;
  text-align: center;
  align-self: center;
  justify-content: flex-end;

  input[type="text"]::placeholder {
    color: #fff;
}
`

const Input = styled.input `
  background: #28bba1;
  line-height: 1;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 7px;
  padding: 0.3rem 0rem;
`

const SearchIcon = styled(SearchAlt2) `
  position: absolute;
  margin: 0.37em 0.7em;
  color: #fff;
  width: 1.1em;
`

function Search() {
  return (
    <WrapperSearch>
      <SearchIcon />
      <Input
        type="text" placeholder=''
        value=''
        onChange=''
      />
    </WrapperSearch>
  )
}

export default Search
