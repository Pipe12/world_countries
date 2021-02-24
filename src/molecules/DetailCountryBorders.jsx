import React, { useState, useEffect }from 'react';
import DetailCountrySubTitle from '../atoms/DetailCountrySubTitle';
import BordersButtonGroup from './BordersButtonGroup';
import BorderButton from '../atoms/BorderButton';

const DetailCountryBorders = ({ borders }) => {
  const [countryBorders, setCountryBorders] = useState([]);

  const url = `https://restcountries.eu/rest/v2/alpha?codes=${borders.join(';')}`;

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

  console.log(countryBorders);

  return (
    <div className='DetailCountryBorders'>
      <DetailCountrySubTitle text='Border Countries:' />
      <BordersButtonGroup>
        {
          countryBorders.map((border, index) => {
            return <BorderButton key={index} border={border.name} />
          })
        }
      </BordersButtonGroup>
    </div>
  )
}

export default DetailCountryBorders;
