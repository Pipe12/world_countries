import React, { useState } from 'react';
import DropDownButton from '../atoms/DropDownButton';
import DropDownList from '../atoms/DropDownList';

const DropDown = ({ regions }) => {
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
          ? <DropDownList regions={regions}/> 
          : null
      }
    </div>
  )
}

export default DropDown;
