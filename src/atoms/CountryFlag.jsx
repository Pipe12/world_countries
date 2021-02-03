import React from 'react';

const CountryFlag = ({ Colombia }) => {
  const { name, flag } = Colombia;
  return (
    <figure className='CountryFlag'>
      <img src={flag} alt={name}/>
    </figure>
  )
}

export default CountryFlag;
