import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../atoms/Loading';

const DetailCountry = (props) => {
  const { alpha3Code } = useParams();
  const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`;

  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([])

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

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <>
      {
        loading 
          ? <Loading />
          : <>
              <Link to='/'>
                Regresar
              </Link>
              <h2>{country.name}</h2>
            </>
      }
    </>
  )
}

export default DetailCountry;
