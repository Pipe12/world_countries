import React from 'react';
import { StyledDetailCountryInfo } from './StyledDetailCountryInfo';
import DetailCountryTitle from '../../atoms/DetailCountryTitle/DetailCountryTitle';
import DetailCountryBasic from '../../atoms/DetailCountryBasic/DetailCountryBasic';
import DetailCountrySecondary from '../../atoms/DetailCountrySecondary/DetailCountrySecondary';
import DetailCountryBorders from '../../molecules/DetailCountryBorders/DetailCountryBorders';

const DetailCountryInfo = ({ country }) => {
  return (
    <StyledDetailCountryInfo>
      <DetailCountryTitle {...country} />
      <DetailCountryBasic {...country}/>
      <DetailCountrySecondary {...country} />
      <DetailCountryBorders {...country}/>
    </StyledDetailCountryInfo>
  )
}

export default DetailCountryInfo;
