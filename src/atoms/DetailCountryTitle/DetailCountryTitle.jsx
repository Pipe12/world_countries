import React from "react";
import { StyledDetailCountryTitle } from "./StyledDetailCountryTitle";

const DetailCountryTitle = ({ names }) => {
  return <StyledDetailCountryTitle>{names.common}</StyledDetailCountryTitle>;
};

export default DetailCountryTitle;
