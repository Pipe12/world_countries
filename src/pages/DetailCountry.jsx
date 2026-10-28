import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../atoms/Loading/Loading";
import DetailCountryLayout from "../layouts/DetailContryLayout/DetailCountryLayout";
import BackButton from "../atoms/BackButton/BackButton";
import DetailCountryFlag from "../atoms/DetailCountryFlag/DetailCountryFlag";
import DetailCountryInfo from "../layouts/DetailCountryInfo/DetailCountryInfo";
import { BASE_URL, PATH_NAMES } from "../constants/api";

const options = {
  headers: {
    Authorization: "Bearer rc_live_e804b61b9e1d491ca8f6508c833ecac1",
  },
};

const DetailCountry = () => {
  const { countryName } = useParams();
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);

  const url = `${BASE_URL}${PATH_NAMES}${countryName}`;

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const json = await response.json();

        const country = [...json.data.objects];

        setCountry(country[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry();
  }, [url]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <DetailCountryLayout>
            <BackButton />
            <DetailCountryFlag names={country.names} flag={country.flag} />
            <DetailCountryInfo country={country} />
          </DetailCountryLayout>
        </>
      )}
    </>
  );
};

export default DetailCountry;
