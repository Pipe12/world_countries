import React from 'react';

const DetailCountryFacts = ({ info }) => {
  console.log(info)

  
  return (
    <div className='DetailCountryFacts'>
      {
        Object.entries(info).map(([key, value], index) => {
           console.log(key.replace(/([A-Z])/g, ' $1').trim());
          return (
            <p key={index}>
              <span className='CountryDataKey'>{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}
            </p>
          )
        })
      }
    </div>
  )
}

export default DetailCountryFacts;
