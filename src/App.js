import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Loading from './atoms/Loading';
import { Regions } from './utils/regions';
import './App.css';

const url = 'https://restcountries.eu/rest/v2/all';

function App() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

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
    setRegions(Regions);
  }, []);

  return (
    <div className="App">
      {
        loading 
          ? <Loading />
          : <Home 
            countries={countries}
            regions={regions}
          />
      }
    </div>
  );
}

export default App;
