export const BASE_URL = "https://api.restcountries.com";

export const PATH_COUNTRIES = "/countries/v5";
export const PATH_NAMES = "/countries/v5/names.common/";
export const PATH_BORDERS = "/countries/v5/borders/";

export const API_OPTIONS = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_RESTCOUNTRIES_TOKEN}`,
  },
};
