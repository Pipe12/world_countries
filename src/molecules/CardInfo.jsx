import React from 'react';
import CardTitle from '../atoms/CardTitle';
import CountryData from '../atoms/CountryData';

const CardInfo = ({ Country }) => {
  const { name, population, region, capital } = Country;
  console.log(name)
  return (
    <div className='CardInfo'>
      <CardTitle name={name}/>
      <CountryData  
        population={population}
        region={region}
        captial={capital}
      />
    </div>
  )
}

export default CardInfo;
