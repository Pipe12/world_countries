import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Loading from './atoms/Loading';
import './App.css';

const url = 'https://restcountries.eu/rest/v2/all';

function App() {
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
  }, [])

  return (
    <div className="App">
      {
        loading 
          ? <Loading />
          : <Home countries={countries} />
      }
    </div>
  );
}

export default App;
