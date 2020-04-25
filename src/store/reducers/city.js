import axios from "axios"; 

const FETCH_CITIES = "FETCH_CITIES"; 

const fetchCities = cities => {
  return {
    type: FETCH_CITIES, 
    cities
  }
}

export const fetchCityArray = dispatch => {
  const url = `https://weathermark-server.herokuapp.com/api/city`
  return async dispatch => {
    try {
      const {data} = await axios.get(url); 
      dispatch(fetchCities(data)); 
    } catch (err) {
      console.log(err)
    }
  }
}

const citiesReducer = (state=[], action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return action.cities
    default: 
      return state
  }
}

export default citiesReducer