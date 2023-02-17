import React, { useState, useEffect }from 'react';
import { StyledDetailCountryBorders } from './StyledDetailCountryBorders';
import DetailCountrySubTitle from '../../atoms/DetailCountrySubtitle/DetailCountrySubTitle';
import BordersButtonGroup from '../BordersButtonGroup/BordersButtonGroup';
import BorderButton from '../../atoms/BorderButton/BorderButton';

const DetailCountryBorders = ({ borders }) => {
  
  console.log(borders)
  const [countryBorders, setCountryBorders] = useState([]);

  if(borders?.length) {
    borders = borders.join(',');
  }
  const  url = `https://restcountries.com/v2/alpha?codes=${borders}`;

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(url);
        const  countryBorders = await response.json();
        setCountryBorders(countryBorders);
      } catch (error) {
        console.error(error); 
      }
    }
    fetchCountry();
  }, [ url ]);

  return (
    <StyledDetailCountryBorders>
      <DetailCountrySubTitle text='Border Countries:' />
      <BordersButtonGroup>
        {
          countryBorders.length > 0
            ? (
              countryBorders.map((border, index) => {
                return (
                  <BorderButton 
                    key={index}
                    {...border}
                  />
                ) 
              })
            )
            : null
        }
      </BordersButtonGroup>
    </StyledDetailCountryBorders>
  )
}

export default DetailCountryBorders;
