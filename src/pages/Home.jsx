import React from 'react';
import Header from '../molecules/Header';
import Main from '../molecules/Main';

const Home = ({ countries, regions }) => {
  return (
    <>
      <Header />
      <Main
        countries={countries}
        regions={regions}
      />
    </>
  )
}

export default Home;
