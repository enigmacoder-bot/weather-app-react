export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "replace_with_your_api_key", //get your api key by creating account and using geo db in rapidapi.com
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";



export const WEATHER_API_URL =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

export const WEATHER_API_KEY = "replace_with_your_weather_api_key"; //get your api key by creating account at www.openweathermap.org
