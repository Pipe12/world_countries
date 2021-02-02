import React from 'react';
import Header from '../molecules/Header';
import Main from '../molecules/Main';

const Home = ({ countries }) => {
  return (
    <>
      <Header />
      <Main countries={countries}/>
    </>
  )
}

export default Home;
