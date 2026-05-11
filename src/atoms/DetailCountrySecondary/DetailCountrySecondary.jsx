import React from 'react';
import { StyledDetailCountrySecondary } from './StyledDetailCountrySecondary';

const DetailCountrySecondary = ({ tld, currencies, languages }) => {
  const getCurrencyNames = (currencies) =>
    Object.values(currencies).map((c) => c.name);

  const getLanguageNames = (languages) => Object.values(languages);

  return (
    <StyledDetailCountrySecondary>
      <p>
        <span className='CountryDataKey'>Top Level Domain:</span> {tld[0]}
      </p>
      <p>
        <span className='CountryDataKey'>Currencies: </span>
        {getCurrencyNames(currencies).map((currency, index) => {
          return getCurrencyNames(currencies).length === index + 1 ? (
            <span key={index}>{currency}</span>
          ) : (
            <span key={index}>{currency}, </span>
          );
        })}
      </p>
      <p>
        <span className='CountryDataKey'>Languages: </span>
        {getLanguageNames(languages).map((language, index) => {
          return getLanguageNames(languages).length === index + 1 ? (
            <span key={index}> {language}</span>
          ) : (
            <span key={index}> {language}, </span>
          );
        })}
      </p>
    </StyledDetailCountrySecondary>
  );
};

export default DetailCountrySecondary;
