import React from 'react';
import DetailCountryTitle from '../atoms/DetailCountryTitle';
import DetailCountryBasic from '../atoms/DetailCountryBasic/DetailCountryBasic';
import DetailCountrySecundary from '../atoms/DetailCountrySecundary';
import DetailCountryBorders from '../molecules/DetailCountryBorders';

const DetailCountryInfo = ({ country }) => {
  return (
    <section className='DetailCountryInfo'>
      <DetailCountryTitle {...country} />
      <DetailCountryBasic {...country}/>
      <DetailCountrySecundary {...country} />
      <DetailCountryBorders {...country}/>
    </section>
  )
}

export default DetailCountryInfo;
