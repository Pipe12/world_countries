import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailCountry = (props) => {
  let { alpha3Code } = useParams();

  return (
    <>
      <Link to='/'>
        Regresar
      </Link>
      <h2>{alpha3Code}</h2>
    </>
  )
}

export default DetailCountry;
