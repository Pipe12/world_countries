import React from 'react';

const DetailCountryBasic = ({ topLevelDomain, currencies, languages }) => {
  return (
    <div className='DetailCountrySecundary'>
      <p><span className='CountryDataKey'>Top Level Domain:</span> {topLevelDomain}</p>
      <p>
        <span className='CountryDataKey'>Currencies: </span>
        {
          currencies.map((currency, index) => {
            return (
              (currencies.length === index + 1)
                ? <span>{currency.name}</span>
                : <span>{currency.name}, </span>
            )
          })
        }
      </p>
      <p>
        <span className='CountryDataKey'>Languages: </span>
        {
          languages.map((language, index) => {
            return (
              (languages.length === index + 1)
                ? <span> {language.name}</span>
                : <span> {language.name}, </span>
            )
          })
          }
      </p>
    </div>
  )
}

export default DetailCountryBasic;
