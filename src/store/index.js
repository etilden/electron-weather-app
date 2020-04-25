import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./reducers/weatherData"
import userReducer from "./reducers/user";

//For more of that young weather
// https://openweathermap.org/api

const reducer = combineReducers({
  weather: weatherReducer, 
  user: userReducer
}); 

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}));

const store = createStore(reducer, middleware);

export default store; 