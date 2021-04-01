import React, { useState } from 'react';
import DropDownButton from '../atoms/DropDownButton/DropDownButton';
import DropDownList from '../atoms/DropDownList';

const DropDown = ({ regions, filterByRegion }) => {
  const [showRegions, setShowRegions] = useState(false);

  const handleDropDownButton = () => setShowRegions(!showRegions);
  return (
    <div className='DropDown'>
      <DropDownButton 
        handleDropDownButton={ handleDropDownButton }
        showRegions={showRegions}
      />
      {
        showRegions 
          ? <DropDownList regions={regions} filterByRegion={filterByRegion}/> 
          : null
      }
    </div>
  )
}

export default DropDown;
