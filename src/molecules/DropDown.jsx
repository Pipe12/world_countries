import React from 'react';
import DropDownButton from '../atoms/DropDownButton';
import DropDownList from '../atoms/DropDownList';

const DropDown = ({ regions }) => {
  return (
    <div className='DropDown'>
      <DropDownButton />
      <DropDownList regions={regions}/>
    </div>
  )
}

export default DropDown;
