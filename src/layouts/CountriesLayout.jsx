import React from 'react';

const CountriesLayout = ({ children }) => {
  return (
    <section className='CountriesLayout'>
      <ul className='CountriesLayout__list'>
        <a 
          href='/'
          className='CountryCard__link'
        >
          <li>
            { children }
          </li>
        </a>
      </ul>
    </section>
  )
}

export default CountriesLayout;
