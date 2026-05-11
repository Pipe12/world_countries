import React from 'react';
import { StyledDetailCountryFlag } from './StyledDetailCountryFlag';

const DetailCountryFlag = ({ name, flags }) => {
  return (
    <StyledDetailCountryFlag>
      <img src={flags.png} alt={name.common} />
    </StyledDetailCountryFlag>
  );
};

export default DetailCountryFlag;
