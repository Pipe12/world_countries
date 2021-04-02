import React from 'react';
import { StyledModeCTA, StyledBsMoon, StyledBsSun } from './StyledModeCTA';

const ModeCTA = ({ toggleTheme, theme }) => {
  return (
    <StyledModeCTA
      className='Mode-CTA'
      onClick={toggleTheme}
    >
      {
        theme === 'dark' 
          ? <><StyledBsMoon /><span>Dark Mode</span></>
          : <><StyledBsSun /><span>Light Mode</span></>
      }
    </StyledModeCTA>
  )
}

export default ModeCTA;
