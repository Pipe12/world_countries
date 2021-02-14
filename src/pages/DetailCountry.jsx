import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailCountry = (props) => {
  let { name } = useParams();

  return (
    <>
      <Link to='/'>
        Regresar
      </Link>
      <h2>{name}</h2>
    </>
  )
}

export default DetailCountry;
