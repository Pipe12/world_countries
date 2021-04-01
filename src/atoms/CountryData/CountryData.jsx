import React from 'react';
import { StyledCountryData } from './StyledCountryData';

const CountryData = ({population, region, captial}) => {
  return (
    <StyledCountryData>
      <p>
        <span>Population:</span> {population}
      </p>
      <p>
        <span>Region:</span> {region}
      </p>
      <p>
        <span>Captial:</span> {captial}
      </p>
    </StyledCountryData>
  )
}

export default CountryData;
