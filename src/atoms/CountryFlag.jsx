import React from 'react';

const CountryFlag = ({ name, flag }) => {
  return (
    <figure className='CountryFlag'>
      <img src={flag} alt={name}/>
    </figure>
  )
}

export default CountryFlag;
