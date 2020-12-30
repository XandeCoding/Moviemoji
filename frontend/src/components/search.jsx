import React, { useState } from "react"
import styled from 'styled-components'
import { SearchAlt2 } from '@styled-icons/boxicons-regular'
import MovieContainer from '../providers/movieContainer'
import MovieService from '../services/movieService'


const WrapperSearch = styled.div `
  display: flex;
  text-align: center;
  align-self: center;
  padding-right: 2rem;
  width: fit-content;

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
  padding: 0.3rem 1rem;
`

const SearchIcon = styled(SearchAlt2) `
  display: flex;
  position: absolute;
  align-self: center;
  margin-left: 11.2rem;
  color: #fff;
  width: 1.2rem;
`

function Search() {
  const [ search, setSearch ] = useState('')
  const MovieProvider = MovieContainer.useContainer()

  const onChangeSearch = (event) => {
    const searchedValue = event.target.value;
    setSearch(searchedValue)

    if (!searchedValue) {
      MovieService.getMovies(searchedValue).then((result) => {
        if (result) {
          MovieProvider.addMovie(result)
        }
      })
    } else {
      MovieService.searchMovies(searchedValue).then((result) => {
        if (result) {
          MovieProvider.searchedMovies(result)
        }
      })
    }
  }


  return (
    <WrapperSearch>
      <SearchIcon />
      <Input
        type="text" placeholder=''
        value={ search }
        onChange={ onChangeSearch }
      />
    </WrapperSearch>
  )
}

export default Search
