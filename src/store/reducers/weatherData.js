import axios from 'axios'

const SET_WEATHER_DATA = 'SET_WEATHER_DATA'

const setWeatherData = weatherData => {
  return {
    type: SET_WEATHER_DATA,
    weatherData
  };
};


export const fetchWeatherData = (id) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?id=${id}&units=imperial&APPID=c6ad0b9d50b71969591fe04ba504bcc3`;
  return async dispatch => {
    try {
      const { data } = await axios.get(url)
      dispatch(setWeatherData(data))
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