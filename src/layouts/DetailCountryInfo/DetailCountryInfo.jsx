import React from 'react';
import { StyledDetailCountryInfo } from './StyledDetailCountryInfo';
import DetailCountryTitle from '../../atoms/DetailCountryTitle/DetailCountryTitle';
import DetailCountryBasic from '../../atoms/DetailCountryBasic/DetailCountryBasic';
import DetailCountrySecundary from '../../atoms/DetailCountrySecundary/DetailCountrySecundary';
import DetailCountryBorders from '../../molecules/DetailCountryBorders';

const DetailCountryInfo = ({ country }) => {
  return (
    <StyledDetailCountryInfo>
      <DetailCountryTitle {...country} />
      <DetailCountryBasic {...country}/>
      <DetailCountrySecundary {...country} />
      <DetailCountryBorders {...country}/>
    </StyledDetailCountryInfo>
  )
}

export default DetailCountryInfo;
