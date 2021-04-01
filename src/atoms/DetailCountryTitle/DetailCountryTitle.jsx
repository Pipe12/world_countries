import React from 'react';
import { StyledDetailCountryTitle } from './StyledDetailCountryTitle';

const DetailCountryTitle = ({ name }) => {
  return (
    <StyledDetailCountryTitle>
      { name }
    </StyledDetailCountryTitle>
  )
}

export default DetailCountryTitle;
