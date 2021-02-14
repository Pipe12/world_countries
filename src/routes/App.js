import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DetailCountry from '../pages/DetailCountry';
import Loading from '../atoms/Loading';
import { Regions } from '../utils/regions';
import '../assets/styles/App.css';

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
          : (
            <Router>
              <Switch>
                <Route exact path='/'>
                  <Home 
                    countries={countries}
                    regions={regions}
                  />
                </Route>
                <Route exact path='/country/:name'>
                  <DetailCountry />
                </Route>
              </Switch>
            </Router>
          ) 
      }
    </div>
  );
}

export default App;
