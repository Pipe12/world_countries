import React, { useState, useEffect } from "react";
import Main from "../molecules/Main/Main";
import { Regions } from "../utils/regions";
import Loading from "../atoms/Loading/Loading";
import { BASE_URL, PATH_COUNTRIES } from "../constants/api";

const url = `${BASE_URL}${PATH_COUNTRIES}?response_fields=names,capital,currencies,flag,population,region,subregion,languages&limit=50`;
const options = {
  headers: {
    Authorization: "Bearer rc_live_e804b61b9e1d491ca8f6508c833ecac1",
  },
};

const Home = () => {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [countriesRef, setCountriesRef] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const json = await response.json();

        const countries = [...json.data.objects];

        setCountries(countries);
        setCountriesRef(countries);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    setRegions(Regions);
  }, []);

  const filterByRegion = (region) => {
    let regionCountries = countriesRef.filter(
      (country) => country.region === region,
    );
    setCountries(regionCountries);
  };

  const filterByCountry = (event) => {
    let PATTERN = event.target.value;
    PATTERN = PATTERN.charAt(0).toUpperCase() + PATTERN.slice(1);
    let filtered = countriesRef.filter((country) =>
      country.names.common.includes(PATTERN),
    );
    setCountries(filtered);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Main
          countries={countries}
          regions={regions}
          filterByRegion={filterByRegion}
          filterByCountry={filterByCountry}
        />
      )}
    </>
  );
};

export default Home;
