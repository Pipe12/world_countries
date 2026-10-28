import React from "react";
import { StyledDetailCountryFlag } from "./StyledDetailCountryFlag";

const DetailCountryFlag = ({ names, flag }) => {
  return (
    <StyledDetailCountryFlag>
      <img src={flag.url_png} alt={names.common} />
    </StyledDetailCountryFlag>
  );
};

export default DetailCountryFlag;
