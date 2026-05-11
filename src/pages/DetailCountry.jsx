import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../atoms/Loading/Loading';
import DetailCountryLayout from '../layouts/DetailContryLayout/DetailCountryLayout';
import BackButton from '../atoms/BackButton/BackButton';
import DetailCountryFlag from '../atoms/DetailCountryFlag/DetailCountryFlag';
import DetailCountryInfo from '../layouts/DetailCountryInfo/DetailCountryInfo';

const DetailCountry = () => {
  const { countryName } = useParams();
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);

  const url = `https://restcountries.com/v3.1/name/${countryName}`;

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const country = await response.json();
        setCountry(country[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry();
  }, [url]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <DetailCountryLayout>
            <BackButton />
            <DetailCountryFlag name={country.name} flags={country.flags} />
            <DetailCountryInfo country={country} />
          </DetailCountryLayout>
        </>
      )}
    </>
  );
};

export default DetailCountry;
