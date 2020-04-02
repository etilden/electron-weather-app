import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./reducers/weatherData"

//For more of that young weather
// https://openweathermap.org/api

const reducer = combineReducers({
  weather: weatherReducer
}); 

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}));

const store = createStore(reducer, middleware);

export default store; 