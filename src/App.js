import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import './App.css';

const url = 'https://restcountries.eu/rest/v2/all';

function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, [])

  return (
    <div className="App">
      <Home countries={countries} />
    </div>
  );
}

export default App;
