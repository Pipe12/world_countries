import React from 'react';
import SearchLayout from '../layouts/SearchLayout';
import Search from '../molecules/Search';
import DropDown from '../molecules/DropDown';

const Main = () => {
  return (
    <main className='Main'>
      <SearchLayout>
        <Search />
        <DropDown />
      </SearchLayout>
    </main>
  )
}

export default Main;
