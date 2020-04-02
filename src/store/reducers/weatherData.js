import axios from 'axios'

const SET_WEATHER_DATA = 'SET_WEATHER_DATA'

const setWeatherData = weatherData => {
  return {
    type: SET_WEATHER_DATA,
    weatherData
  };
};

const url =
  'http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&APPID=948907a92e0e6427643a8f49f8d73e96';

export const fetchWeatherData = () => {
  return async dispatch => {
    try {
      const response = await axios.get(url)
      dispatch(setWeatherData(response.data))
    } catch (err) {
      console.log(err)
    };
  };
};

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return action.weatherData
    default:
      return state
  };
};

export default weatherReducer;