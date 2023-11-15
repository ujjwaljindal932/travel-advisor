/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://open-weather-map27.p.rapidapi.com/weather', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
          'x-rapidapi-host': 'open-weather-map27.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};





// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
//   params: {
//     query: 'eiffel tower',
//     lang: 'en_US',
//     units: 'km'
//   },
//   headers: {
//     'X-RapidAPI-Key': '9775086ccbmsh16ff94b813ea38fp1e49efjsnf3327431b691',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }




// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://open-weather-map27.p.rapidapi.com/weather',
//   headers: {
//     'X-RapidAPI-Key': '9775086ccbmsh16ff94b813ea38fp1e49efjsnf3327431b691',
//     'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }