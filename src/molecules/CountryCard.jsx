import React from 'react';
import CountryFlag from '../atoms/CountryFlag';

const CountryCard = ({ Colombia }) => {
  return (
    <div className='CountryCard'>
      <CountryFlag Colombia={Colombia} />
    </div>
  )
}

export default CountryCard;
