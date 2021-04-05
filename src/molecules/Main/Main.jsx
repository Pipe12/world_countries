import React from 'react';
import { StyledMain } from './StyledMain';
import SearchLayout from '../../layouts/SearchLayout/SearchLayout';
import Search from '../Search/Search';
import DropDown from '../DropDown/DropDown';
import CountriesLayout from '../../layouts/CountriesLayout/CountriesLayout';

const Main = ({ countries, regions, filterByRegion, filterByCountry }) => {
  return (
    <StyledMain>
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
    </StyledMain>
  )
}

export default Main;
