import {
  REACT_APP_NASA_ENDPOINT,
  REACT_APP_NASA_API_KEY
} from '../common/constants';

export const get: any = async() => {
  const url = REACT_APP_NASA_ENDPOINT + '/planetary/apod?api_key=' + REACT_APP_NASA_API_KEY;

  const data = await fetch(url, {
    method: 'GET'
  });

  const jsonData = await data.json();
  
  // return jsonData;
};

// // https://api.nasa.gov/planetary/apod?api_key=

// jHqc8nymGndUexQI6DDDrI1HtLIVzeYXG7qQprNr

// jHqc8nymGndUexQI6DDDrI1HtLIVzeYXG7qQprNr