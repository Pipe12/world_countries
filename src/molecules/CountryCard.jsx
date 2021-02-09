import React from 'react';
import CountryFlag from '../atoms/CountryFlag';
import CardInfo from './CardInfo';

const CountryCard = ({ country }) => {
  const { 
          name,
          flag,
          population,
          region,
          capital
        } = country
  return (
    <div className='CountryCard'>
      <CountryFlag
        name={name}
        flag={flag}
      />
      <CardInfo
        name={name}
        population={population}
        region={region}
        capital={capital}
      />
    </div>
  )
}

export default CountryCard;
