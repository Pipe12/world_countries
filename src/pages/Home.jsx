import React, { useState, useEffect } from 'react';
import Header from '../molecules/Header';
import Main from '../molecules/Main';
import { Regions } from '../utils/regions';
import Loading from '../atoms/Loading';

const Home = () => {

  const url = 'https://restcountries.eu/rest/v2/all';

  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries.slice(0, 10));
      setLoading(false);
    } catch (error) {
      console.error(error); 
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    setRegions(Regions)
  }, []);

  return (
    <>
      {
        loading 
          ? <Loading />
          : <>
              <Header />
              <Main
                countries={countries}
                regions={regions}
              />
            </>
      }
    </>
    
  )
}

export default Home;
