import React from 'react';
import { connect } from "react-redux";
import ReactAutocomplete from 'react-autocomplete';
// import cities from "../city.list.json";
import { fetchWeatherData } from "../store/reducers/weatherData";
import { fetchCityArray } from "../store/reducers/city"

class WeatherHome extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      start: null,
      value: '',
      selectedCity: null,
    }
    this.weatherGetter = this.weatherGetter.bind(this)
    this.cities = [];
  }

  componentDidMount() {
    this.setState({start: new Date()})
    this.cities = this.props.fetchCityArray(); 
  }

  weatherGetter(value, item) {
    this.setState({ value: '', selectedCity: item })
    this.props.fetchWeatherData(item.id)
  }

  render() {
    return(
      <>
        <div>{this.state.start+''}</div>
        {this.props.weather.weather ? 
        <div><div>{this.props.weather.weather[0].main}</div><div>{this.props.weather.weather[0].description}</div></div> : null } 
        <ReactAutocomplete
          items={this.cities}
          shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={item => item.name}
          renderItem={(item, highlighted) =>
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
            >
              {item.name}
            </div>

          }
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onSelect={(value, item) => this.weatherGetter(value, item)}
          open={this.state.value.length >= 3}
        />
        {this.state.selectedCity ? <div>You have selected {this.state.selectedCity.name}, id: {this.state.selectedCity.id} </div> : null}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
    cities: state.cities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWeatherData: (id) => dispatch(fetchWeatherData(id)),
    fetchCityArray: () => dispatch(fetchCityArray())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherHome)