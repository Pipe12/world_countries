import React from 'react';
import { StyledBordersButtonGroup } from './StyledBordersButtonGroup'

const BordersButtonGroup = ({ children }) => {

  return (
    <StyledBordersButtonGroup>
      { children }
    </StyledBordersButtonGroup>
  )
}

export default BordersButtonGroup;
