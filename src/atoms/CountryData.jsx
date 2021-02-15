import React from 'react';

const CountryData = ({population, region, captial}) => {
  return (
    <div className='CountryData'>
      <p><span className='CountryDataKey'>Population:</span> {population}</p>
      <p><span className='CountryDataKey'>Region:</span> {region}</p>
      <p><span className='CountryDataKey'>Captial:</span> {captial}</p>
    </div>
  )
}

export default CountryData;
