import React, { useState } from 'react';
import { StyledDropDown } from './StyledDropDown';
import DropDownButton from '../../atoms/DropDownButton/DropDownButton';
import DropDownList from '../../atoms/DropDownList/DropDownList';

const DropDown = ({ regions, filterByRegion }) => {
  const [showRegions, setShowRegions] = useState(false);

  const handleDropDownButton = () => setShowRegions(!showRegions);
  return (
    <StyledDropDown>
      <DropDownButton 
        handleDropDownButton={ handleDropDownButton }
        showRegions={showRegions}
      />
      {
        showRegions 
          ? <DropDownList regions={regions} filterByRegion={filterByRegion}/> 
          : null
      }
    </StyledDropDown>
  )
}

export default DropDown;
