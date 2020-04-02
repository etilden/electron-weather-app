import React from 'react';
import { connect } from "react-redux";

class WeatherHome extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      start: null
    }
  }

  componentDidMount() {
    this.setState({start: new Date()})
  }

  render() {
    return(
      <>
        <div>{this.state.start+''}</div>
        {this.props.weather.weather ? 
        <div><div>{this.props.weather.weather[0].main}</div><div>{this.props.weather.weather[0].description}</div></div> : null } 
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherHome)