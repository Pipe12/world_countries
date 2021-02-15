import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory()
  return (
    <button
      onClick={() => history.goBack()}
      className='BackButton'
      type="button" 
    >
      <BsArrowLeft className='BackIcon'/>
      Back
    </button>
  )
}

export default BackButton;
