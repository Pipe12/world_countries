import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../atoms/Loading';
import DetailCountryLayout from '../layouts/DetailCountryLayout';
import BackButton from '../atoms/BackButton/BackButton';
import DetailCountryFlag from '../atoms/DetailCountryFlag/DetailCountryFlag';
import DetailCountryInfo from '../layouts/DetailCountryInfo';

const DetailCountry = () => {
  const { alpha3Code } = useParams();
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([])

  const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`;

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const country = await response.json();
        setCountry(country);
        setLoading(false);
      } catch (error) {
        console.error(error); 
      }
    }
    fetchCountry();
  }, [ url ]);

  return (
    <>
      {
        loading 
          ? <Loading />
          : <>
              <DetailCountryLayout>
                <BackButton />
                <DetailCountryFlag
                  name={country.name}
                  flag={country.flag}
                />
                <DetailCountryInfo country={country}/>
              </DetailCountryLayout>
            </>
      }
    </>
  )
}

export default DetailCountry;
