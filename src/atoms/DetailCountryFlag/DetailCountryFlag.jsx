import React from 'react';
import { StyledDetailCountryFlag } from './StyledDetailCountryFlag';

const DetailCountryFlag = ({ name, flag }) => {
  return (
    <StyledDetailCountryFlag>
      <img src={flag} alt={name}/>
    </StyledDetailCountryFlag>
  )
}

export default DetailCountryFlag;
