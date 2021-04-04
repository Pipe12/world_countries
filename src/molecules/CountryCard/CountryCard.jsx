import React from 'react';
import { StyledCountryCard } from './StyledCountryCard';
import CountryCardFlag from '../../atoms/CountryCardFlag/CountryCardFlag';
import CardInfo from '../CardInfo/CardInfo';

const CountryCard = ({ country }) => {
  const { 
          name,
          flag,
          population,
          region,
          capital
        } = country
  return (
    <StyledCountryCard>
      <CountryCardFlag
        name={name}
        flag={flag}
      />
      <CardInfo
        name={name}
        population={population}
        region={region}
        capital={capital}
      />
    </StyledCountryCard>
  )
}

export default CountryCard;
