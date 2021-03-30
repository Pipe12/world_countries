import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skeleton from '../pages/Skeleton';
import Home from '../pages/Home';
import DetailCountry from '../pages/DetailCountry';
import '../assets/styles/App.css';

function App() {
  return (
    <Skeleton>
      {
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/country/:alpha3Code' component={DetailCountry} />
          </Switch>
        </Router>
      }
    </Skeleton>
  );
}

export default App;
