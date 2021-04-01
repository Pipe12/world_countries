import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { StyledDropDownButton } from './StyledDropDownButton';

const DropDownButton = ({ handleDropDownButton, showRegions }) => {
  return (
    <StyledDropDownButton
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
    </StyledDropDownButton>
  )
}

export default DropDownButton;
