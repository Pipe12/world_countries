import React from 'react';
import {
  StyledCountriesLayout,
  StyledCountriesLayoutList,
  StyledCountryCardLink,
} from './StyledCountriesLayout';
import CountryCard from '../../molecules/CountryCard/CountryCard';

const CountriesLayout = ({ countries }) => {
  return (
    <StyledCountriesLayout>
      <StyledCountriesLayoutList>
        {countries.map((country, index) => (
          <StyledCountryCardLink
            to={`/country/${country.name.common}`}
            className='CountryCard__link'
            key={index}
          >
            <li>
              <CountryCard country={country} />
            </li>
          </StyledCountryCardLink>
        ))}
      </StyledCountriesLayoutList>
    </StyledCountriesLayout>
  );
};

export default CountriesLayout;
