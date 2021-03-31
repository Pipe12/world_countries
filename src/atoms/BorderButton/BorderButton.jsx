import React from 'react';
import { StyledBorderButton } from './StyledBorderButton';

const BorderButton = ({ alpha3Code, name }) => {
  return (
    <StyledBorderButton
      to={`/country/${alpha3Code}`}
      className='BorderButton'
    >
      {name}
    </StyledBorderButton>
  )
}

export default BorderButton;
