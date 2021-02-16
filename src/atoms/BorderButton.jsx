import React from 'react';
import { Link } from 'react-router-dom';

const BorderButton = ({ border }) => {
  return (
    <Link
      to={`/country/${border}`}
      className='BorderButton'

    >
      {border}
    </Link>
  )
}

export default BorderButton;
