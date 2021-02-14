import React from 'react';
import { Link } from 'react-router-dom';
import CountryCard from '../molecules/CountryCard';

const CountriesLayout = ({ countries }) => {
  return (
    <section className='CountriesLayout'>
      <ul className='CountriesLayout__list'>
        {
          countries.map((country, index) => 
            <Link
              to={`/country/${country.name}`}
              className='CountryCard__link'
              key={index}
            >
              <li>
                <CountryCard country={country}/>
              </li>
            </Link>
          )
        }
      </ul>
    </section>
  )
}

export default CountriesLayout;
