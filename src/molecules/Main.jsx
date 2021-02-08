import React from 'react';
import SearchLayout from '../layouts/SearchLayout';
import Search from '../molecules/Search';
import DropDown from '../molecules/DropDown';
import CountriesLayout from '../layouts/CountriesLayout';
import CountryCard from '../molecules/CountryCard'

const Main = ({ countries }) => {
  const Colombia = countries[51];
  return (
    <main className='Main'>
      <SearchLayout>
        <Search />
        <DropDown />
      </SearchLayout>
      <CountriesLayout>
          <CountryCard Colombia={Colombia} />
      </CountriesLayout>
    </main>
  )
}

export default Main;
