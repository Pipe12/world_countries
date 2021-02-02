import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const DropDownButton = () => {
  return (
    <button
      className='DropDownButton'
      type="button" 
      id="dropdownMenuButton"
    >
      Filter by Region
      <BsChevronDown />
    </button>
  )
}

export default DropDownButton;
