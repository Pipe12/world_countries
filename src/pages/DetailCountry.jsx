import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../atoms/Loading';
import Header from '../molecules/Header';
import DetailCountryLayout from '../layouts/DetailCountryLayout';
import BackButton from '../atoms/BackButton';
import CountryFlag from '../atoms/CountryFlag';
import DetailCountryInfo from '../layouts/DetailCountryInfo';

const DetailCountry = (props) => {
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
              <Header />
              <DetailCountryLayout>
                <BackButton />
                <CountryFlag
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
