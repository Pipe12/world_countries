import React from 'react';
import CountryCard from '../molecules/CountryCard';

const CountriesLayout = ({ countries }) => {
  console.log(countries);
  return (
    <section className='CountriesLayout'>
      <ul className='CountriesLayout__list'>
        {
          countries.map((country, index) => 
            <a
              href='/'
              className='CountryCard__link'
              key={index}
            >
              <li>
                <CountryCard country={country}/>
              </li>
            </a>
          )
        }
      </ul>
    </section>
  )
}

export default CountriesLayout;
