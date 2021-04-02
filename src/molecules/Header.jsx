import React from 'react';
import HeaderTitle from '../atoms/HeaderTitle/HeaderTitle';
import ModeCTA from '../atoms/ModeCTA/ModeCTA';

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className='Header'>
      <HeaderTitle />
      <ModeCTA toggleTheme={toggleTheme} theme={theme}/>
    </header>
  )
}

export default Header;
