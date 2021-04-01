import React from 'react';
import { StyledDetailCountryBasic } from './StyledDetailCountryBasic';

const DetailCountryBasic = ({ nativeName, population, subregion, capital }) => {  
  return (
    <StyledDetailCountryBasic>
      <p>
        <span>Native Name:</span> {nativeName}
      </p>
      <p>
        <span>Population:</span> {population}
      </p>
      <p>
        <span>Sub Region:</span> {subregion}
      </p>
      <p>
        <span>Capital:</span> {capital}
      </p>
    </StyledDetailCountryBasic>
  )
}

export default DetailCountryBasic;
