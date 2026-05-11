import React from 'react';
import { StyledCountryCard } from './StyledCountryCard';
import CountryCardFlag from '../../atoms/CountryCardFlag/CountryCardFlag';
import CardInfo from '../CardInfo/CardInfo';

const CountryCard = ({ country }) => {
  const { name, flags, population, region, capital } = country;
  return (
    <StyledCountryCard>
      <CountryCardFlag name={name} flags={flags} />
      <CardInfo
        name={name.common}
        population={population}
        region={region}
        capital={capital}
      />
    </StyledCountryCard>
  );
};

export default CountryCard;
