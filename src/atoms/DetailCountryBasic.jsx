import React from 'react';

const DetailCountryBasic = ({ nativeName, population, subregion, capital }) => {  
  return (
    <div className='DetailCountryBasic'>
      <p><span className='CountryDataKey'>Native Name:</span> {nativeName}</p>
      <p><span className='CountryDataKey'>Population:</span> {population}</p>
      <p><span className='CountryDataKey'>Sub Region:</span> {subregion}</p>
      <p><span className='CountryDataKey'>Capital:</span> {capital}</p>
    </div>
  )
}

export default DetailCountryBasic;
