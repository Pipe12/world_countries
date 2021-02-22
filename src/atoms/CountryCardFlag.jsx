import React from 'react';

const CountryCardFlag = ({ name, flag }) => {
  return (
    <figure className='CountryCardFlag'>
      <img src={flag} alt={name}/>
    </figure>
  )
}

export default CountryCardFlag;
