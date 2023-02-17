import React from 'react';
import { StyledCountryData } from './StyledCountryData';

const CountryData = ({population, region, capital}) => {
  return (
    <StyledCountryData>
      <p>
        <span>Population:</span> {population}
      </p>
      <p>
        <span>Region:</span> {region}
      </p>
      <p>
        <span>Capital:</span> {capital}
      </p>
    </StyledCountryData>
  )
}

export default CountryData;
