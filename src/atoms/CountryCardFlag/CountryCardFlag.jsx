import React from "react";
import { StyledCountryFlag } from "./StyledCountryCardFlag";

const CountryCardFlag = ({ name, flag }) => {
  return (
    <StyledCountryFlag className='CountryCardFlag'>
      <img src={flag.url_png} alt={name.common} />
    </StyledCountryFlag>
  );
};

export default CountryCardFlag;
