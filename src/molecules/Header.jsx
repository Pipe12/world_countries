import React from 'react';
import HeaderTitle from '../atoms/HeaderTitle';
import ModeCTA from '../atoms/ModeCTA';

const Header = () => {
  return (
    <header className='Header'>
      <HeaderTitle />
      <ModeCTA />
    </header>
  )
}

export default Header;
