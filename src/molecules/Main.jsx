import React from 'react';
import SearchLayout from '../layouts/SearchLayout';
import Search from '../molecules/Search';
import DropDown from '../molecules/DropDown';
import CountriesLayout from '../layouts/CountriesLayout';

const Main = ({ countries, regions }) => {
  return (
    <main className='Main'>
      <SearchLayout>
        <Search />
        <DropDown regions={regions}/>
      </SearchLayout>
      <CountriesLayout countries={ countries } />
    </main>
  )
}

export default Main;
