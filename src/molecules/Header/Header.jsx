import React from 'react';
import { StyledHeader } from './StyledHeader';
import HeaderTitle from '../../atoms/HeaderTitle/HeaderTitle';
import ModeCTA from '../../atoms/ModeCTA/ModeCTA';

const Header = ({ toggleTheme, theme }) => {
  return (
    <StyledHeader>
      <HeaderTitle />
      <ModeCTA toggleTheme={toggleTheme} theme={theme}/>
    </StyledHeader>
  )
}

export default Header;
