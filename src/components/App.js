import React from 'react';
import { withRouter, Route, Switch } from "react-router-dom";
import WeatherHome from "./WeatherHome"
// import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Switch>
        <Route exact path="/" component={WeatherHome} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
