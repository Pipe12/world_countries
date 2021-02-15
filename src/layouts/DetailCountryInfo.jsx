import React from 'react';
import DetailCountryTitle from '../atoms/DetailCountryTitle';
import DetailCountryBasic from '../atoms/DetailCountryBasic';
import DetailCountrySecundary from '../atoms/DetailCountrySecundary';

const DetailCountryInfo = ({ country }) => {
  return (
    <section className='DetailCountryInfo'>
      <DetailCountryTitle {...country} />
      <DetailCountryBasic {...country}/>
      <DetailCountrySecundary {...country} />
    </section>
  )
}

export default DetailCountryInfo;
