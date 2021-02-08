import React from 'react';
import CountryFlag from '../atoms/CountryFlag';
import CardInfo from './CardInfo';

const CountryCard = ({ Colombia }) => {
  return (
    <div className='CountryCard'>
      <CountryFlag Colombia={Colombia} />
      <CardInfo Country={Colombia}/>
    </div>
  )
}

export default CountryCard;
