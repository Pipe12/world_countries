import React, { useState, useEffect } from 'react';
import { StyledDetailCountryBorders } from './StyledDetailCountryBorders';
import DetailCountrySubTitle from '../../atoms/DetailCountrySubtitle/DetailCountrySubTitle';
import BordersButtonGroup from '../BordersButtonGroup/BordersButtonGroup';
import BorderButton from '../../atoms/BorderButton/BorderButton';

const DetailCountryBorders = ({ borders }) => {
  const [countryBorders, setCountryBorders] = useState([]);

  if (borders?.length) {
    borders = borders.join(',');
  }

  // TODO : error when call Holland from borders.
  const url = `https://restcountries.com/v3.1/alpha?codes=${borders}`;

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(url);
        const countryBorders = await response.json();
        setCountryBorders(countryBorders);
      } catch (error) {
        console.error(error);
      }
    };
    if (borders?.length) {
      fetchCountry();
    }
  }, [url, borders]);

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
