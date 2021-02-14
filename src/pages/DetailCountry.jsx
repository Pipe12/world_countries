import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../atoms/Loading';

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
