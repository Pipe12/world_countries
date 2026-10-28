import React, { useState, useEffect } from "react";
import { StyledDetailCountryBorders } from "./StyledDetailCountryBorders";
import DetailCountrySubTitle from "../../atoms/DetailCountrySubtitle/DetailCountrySubTitle";
import BordersButtonGroup from "../BordersButtonGroup/BordersButtonGroup";
import BorderButton from "../../atoms/BorderButton/BorderButton";
import { BASE_URL, PATH_BORDERS, API_OPTIONS } from "../../constants/api";

const DetailCountryBorders = ({ codes }) => {
  const [countryBorders, setCountryBorders] = useState([]);

  // TODO : error when call Holland from borders.
  const url = `${BASE_URL}${PATH_BORDERS}${codes.alpha_3}`;

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(url, API_OPTIONS);
        const json = await response.json();

        const countryBorders = json.data.objects;

        setCountryBorders(countryBorders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountry();
  }, [url]);

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
