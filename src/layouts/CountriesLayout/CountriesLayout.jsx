import React from 'react';
import { StyledCountriesLayout, StyledCountriesLayoutList, StylesdCountryCardLink } from './StyledCountriesLayout';
import CountryCard from '../../molecules/CountryCard';

const CountriesLayout = ({ countries }) => {
  return (
    <StyledCountriesLayout>
      <StyledCountriesLayoutList>
        {
          countries.map((country, index) => 
            <StylesdCountryCardLink
              to={`/country/${country.alpha3Code}`}
              className='CountryCard__link'
              key={index}
            >
              <li>
                <CountryCard country={country}/>
              </li>
            </StylesdCountryCardLink>
          )
        }
      </StyledCountriesLayoutList>
    </StyledCountriesLayout>
  )
}

export default CountriesLayout;
