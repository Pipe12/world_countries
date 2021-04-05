import React from 'react';
import { StyledSearch, StyledBsSearch } from './StyledSearch';

const Search = ({ filterByCountry }) => {
  return (
    <StyledSearch>
      <StyledBsSearch/>
      <input 
        className='Search__input'
        type='text'
        name='country'
        placeholder='Searck for a country...'
        onChange={filterByCountry}
      />
    </StyledSearch>
  )
}

export default Search;
