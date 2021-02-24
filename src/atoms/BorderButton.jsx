import React from 'react';
import { Link } from 'react-router-dom';

const BorderButton = ({ alpha3Code, name }) => {
  return (
    <Link
      to={`/country/${alpha3Code}`}
      className='BorderButton'

    >
      {name}
    </Link>
  )
}

export default BorderButton;
