import React from "react";
import { StyledCountryCard } from "./StyledCountryCard";
import CountryCardFlag from "../../atoms/CountryCardFlag/CountryCardFlag";
import CardInfo from "../CardInfo/CardInfo";

const CountryCard = ({ country }) => {
  const { names, flag, population, region, capital } = country;

  return (
    <StyledCountryCard>
      <CountryCardFlag name={names.common} flag={flag} />
      <CardInfo
        name={names.common}
        population={population}
        region={region}
        capital={capital}
      />
    </StyledCountryCard>
  );
};

export default CountryCard;
