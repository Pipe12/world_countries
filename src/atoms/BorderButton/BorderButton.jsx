import React from "react";
import { StyledBorderButton } from "./StyledBorderButton";

const BorderButton = ({ names }) => {
  return (
    <StyledBorderButton
      to={`/country/${names.common}`}
      className='BorderButton'
    >
      {names.common}
    </StyledBorderButton>
  );
};

export default BorderButton;
