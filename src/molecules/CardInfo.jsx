import React from 'react';
import CardTitle from '../atoms/CardTitle';
import CountryData from '../atoms/CountryData';

const CardInfo = () => {
  return (
    <div className='CardInfo'>
      <CardTitle name={'Brazil'}/>
      <CountryData />
    </div>
  )
}

export default CardInfo;
