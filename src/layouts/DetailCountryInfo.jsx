import React from 'react';
import DetailCountryTitle from '../atoms/DetailCountryTitle';
import DetailCountryFacts from '../atoms/DetailCountryFacts';

const DetailCountryInfo = ({ country }) => {
  const { name } = country ;

  const getBasicInfo = ({ nativeName, population, subregion, capital}) => {
    return { nativeName, population, subregion, capital}
  };

  const getSecundaryInfo = ({ topLevelDomain, currencies, languages }) => {
    return { topLevelDomain, currencies, languages }
  };

  return (
    <section className='DetailCountryInfo'>
      <DetailCountryTitle name={name} />
      <DetailCountryFacts info={getBasicInfo(country)} />
      <DetailCountryFacts info={getSecundaryInfo(country)} />
    </section>
  )
}

export default DetailCountryInfo;
