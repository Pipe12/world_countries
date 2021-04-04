import React from 'react';
import { StyledCardInfo } from './StyledCardInfo';
import CardTitle from '../../atoms/CardTitle/CardTitle';
import CountryData from '../../atoms/CountryData/CountryData';

const CardInfo = ({ name, population, region, capital }) => {
  return (
    <StyledCardInfo>
      <CardTitle name={name}/>
      <CountryData  
        population={population} 
        region={region}
        captial={capital}
      />
    </StyledCardInfo>
  )
}

export default CardInfo;
