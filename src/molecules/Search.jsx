import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({ filterByCountry }) => {
  return (
    <div className='Search'>
      <BsSearch className='Search__icon'/>
      <input 
        className='Search__input'
        type='text'
        name='country'
        placeholder='Searck for a country...'
        onChange={filterByCountry}
      />
    </div>
  )
}

export default Search;
