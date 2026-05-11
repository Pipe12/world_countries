import React from 'react';
import { StyledBorderButton } from './StyledBorderButton';

const BorderButton = ({ name }) => {
  console.log({ name });
  return (
    <StyledBorderButton to={`/country/${name.common}`} className='BorderButton'>
      {name.common}
    </StyledBorderButton>
  );
};

export default BorderButton;
