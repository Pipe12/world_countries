import React, { useState, useEffect }from 'react';
import DetailCountrySubTitle from '../../atoms/DetailCountrySubtitle/DetailCountrySubTitle';
import BordersButtonGroup from '../BordersButtonGroup/BordersButtonGroup';
import BorderButton from '../../atoms/BorderButton/BorderButton';

const DetailCountryBorders = ({ borders }) => {
  
  const [countryBorders, setCountryBorders] = useState([]);

  borders = borders.join(';');
  const  url = `https://restcountries.eu/rest/v2/alpha?codes=${borders}`;

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
    <div className='DetailCountryBorders'>
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
    </div>
  )
}

export default DetailCountryBorders;
