import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DetailCountry from '../pages/DetailCountry';
import '../assets/styles/App.css';

function App() {
  return (
    <div className="App">
      {
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/country/:alpha3Code' component={DetailCountry} />
          </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
