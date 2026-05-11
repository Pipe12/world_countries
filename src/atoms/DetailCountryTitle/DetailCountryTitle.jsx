import React from 'react';
import { StyledDetailCountryTitle } from './StyledDetailCountryTitle';

const DetailCountryTitle = ({ name }) => {
  return <StyledDetailCountryTitle>{name.common}</StyledDetailCountryTitle>;
};

export default DetailCountryTitle;
