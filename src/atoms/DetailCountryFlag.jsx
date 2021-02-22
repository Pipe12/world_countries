import React from 'react';

const DetailCountryFlag = ({ name, flag }) => {
  return (
    <figure className='DetailCountryFlag'>
      <img src={flag} alt={name}/>
    </figure>
  )
}

export default DetailCountryFlag;
