import React, { useState, useEffect } from "react";
import { StyledDetailCountryBorders } from "./StyledDetailCountryBorders";
import DetailCountrySubTitle from "../../atoms/DetailCountrySubtitle/DetailCountrySubTitle";
import BordersButtonGroup from "../BordersButtonGroup/BordersButtonGroup";
import BorderButton from "../../atoms/BorderButton/BorderButton";

const DetailCountryBorders = ({ codes }) => {
  const [countryBorders, setCountryBorders] = useState([]);

  // TODO : error when call Holland from borders.
  const url = `https://api.restcountries.com/countries/v5/borders/${codes.alpha_3}`;

  const options = {
    headers: {
      Authorization: "Bearer rc_live_e804b61b9e1d491ca8f6508c833ecac1",
    },
  };

  const fetchCountry = async () => {
    try {
      const response = await fetch(url, options);
      const json = await response.json();

      const countryBorders = json.data.objects;

      setCountryBorders(countryBorders);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <StyledDetailCountryBorders>
      <DetailCountrySubTitle text='Border Countries:' />
      <BordersButtonGroup>
        {countryBorders.length > 0
          ? countryBorders.map((border, index) => {
              return <BorderButton key={index} {...border} />;
            })
          : null}
      </BordersButtonGroup>
    </StyledDetailCountryBorders>
  );
};

export default DetailCountryBorders;
