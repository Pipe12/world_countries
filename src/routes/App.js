import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes';
import { GlobalStyles } from '../globalStyles';
import Skeleton from '../pages/Skeleton';
import Home from '../pages/Home';
import DetailCountry from '../pages/DetailCountry';
import '../assets/styles/App.css';

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if(theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Skeleton toggleTheme={toggleTheme}>
        {
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/country/:alpha3Code' component={DetailCountry} />
            </Switch>
          </Router>
        }
      </Skeleton>
    </ThemeProvider>
  );
}

export default App;
