import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const DropDownButton = ({ handleDropDownButton, showRegions }) => {
  return (
    <button
      className='DropDownButton'
      type="button" 
      id="dropdownMenuButton"
      onClick={handleDropDownButton}
    >
      Filter by Region
      {
        showRegions 
          ? <BsChevronUp /> 
          : <BsChevronDown />
      }
    </button>
  )
}

export default DropDownButton;
