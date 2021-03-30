import React from 'react';
import HeaderTitle from '../atoms/HeaderTitle';
import ModeCTA from '../atoms/ModeCTA';

const Header = ({ toggleTheme }) => {
  return (
    <header className='Header'>
      <HeaderTitle />
      <ModeCTA toggleTheme={toggleTheme}/>
    </header>
  )
}

export default Header;
