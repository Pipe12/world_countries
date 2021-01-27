import React from 'react';
import { BsMoon } from 'react-icons/bs';

const ModeCTA = () => {
  return (
    <button className='Mode-CTA'>
        <BsMoon className='Mode-CTA__icon'/>
        <span>Dark Mode</span>
      </button>
  )
}

export default ModeCTA;
