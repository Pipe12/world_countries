import React from 'react';
import { StyledSearchLayout } from './StyledSearchLayout';

const SearchLayout = ({ children }) => {
  return (
    <StyledSearchLayout>
      { children }
    </StyledSearchLayout>
  )
}

export default SearchLayout;
