import React from 'react';
import { StyledCountryFlag } from './StyledCountryCardFlag';

const CountryCardFlag = ({ name, flag }) => {
  return (
    <StyledCountryFlag className='CountryCardFlag'>
      <img src={flag} alt={name}/>
    </StyledCountryFlag>
  )
}

export default CountryCardFlag;
