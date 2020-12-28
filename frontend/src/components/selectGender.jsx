import React from "react"
import styled from 'styled-components'

const SelectGender = styled.select `
  display: flex;
  width: fit-content;
  padding: 0.3rem 1.2rem;
  border: 2px solid #28bba1;
  background-color: #fff;
  color: #28bba1;
  border-radius: 5px;

  select:after {
    border: 6px solid #28bba1;
    margin-right: 10px;
  }
`

function selectGender() {
  return (
    <form>
      <SelectGender>
        <option value="null">Genêros</option>
      </SelectGender>
    </form>
  )
}

export default selectGender;
