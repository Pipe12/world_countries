import React from 'react';
import { BsMoon } from 'react-icons/bs';

const ModeCTA = ({ toggleTheme }) => {
  return (
    <button 
      className='Mode-CTA'
      onClick={toggleTheme}
    >
        <BsMoon className='Mode-CTA__icon'/>
        <span>Dark Mode</span>
      </button>
  )
}

export default ModeCTA;
