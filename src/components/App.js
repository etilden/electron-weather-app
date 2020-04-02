import React from 'react';
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import { fetchWeatherData } from "../store/reducers/weatherData"
import WeatherHome from "./WeatherHome"
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     weather: {}
  //   }
  // }

  componentDidMount() {
    this.props.fetchWeatherData()
  }

  render() {
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
}

// const mapStateToProps = state => {
//   return {
//     weather: state.weather,
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    fetchWeatherData: () => dispatch(fetchWeatherData()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
