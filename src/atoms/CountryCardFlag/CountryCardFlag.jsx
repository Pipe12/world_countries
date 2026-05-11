import React from 'react';
import { StyledCountryFlag } from './StyledCountryCardFlag';

const CountryCardFlag = ({ name, flags }) => {
  return (
    <StyledCountryFlag className='CountryCardFlag'>
      <img src={flags.png} alt={name.common} />
    </StyledCountryFlag>
  );
};

export default CountryCardFlag;
