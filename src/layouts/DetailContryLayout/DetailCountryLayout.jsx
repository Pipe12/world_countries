import React from 'react';
import { StyledDetailCountryLayout } from './StyledDetailCountryLayout';

const DetailCountryLayout = ({ children }) => {
  return (
    <StyledDetailCountryLayout>
      { children }
    </StyledDetailCountryLayout>
  )
}

export default DetailCountryLayout;
