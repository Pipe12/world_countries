import React from 'react';
import SearchLayout from '../layouts/SearchLayout';
import Search from '../molecules/Search';
import DropDown from '../molecules/DropDown';
import CountriesLayout from '../layouts/CountriesLayout/CountriesLayout';

const Main = ({ countries, regions, filterByRegion, filterByCountry }) => {
  return (
    <main className='Main'>
      <SearchLayout>
        <Search
          filterByCountry={filterByCountry}
        />
        <DropDown 
          regions={regions}
          filterByRegion={filterByRegion}
        />
      </SearchLayout>
      <CountriesLayout countries={ countries } />
    </main>
  )
}

export default Main;
