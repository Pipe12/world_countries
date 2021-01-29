import React from 'react';
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  return (
    <div className='Search'>
      <BsSearch className='Search__icon'/>
      <input 
        className='Search__input'
        type='text'
        name='country'
        placeholder='Searck for a country...'
      />
    </div>

  )
}

export default Search;
