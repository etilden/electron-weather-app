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
    console.log(this.state.start)
    return(
      <>
        <div>Words Stuff</div>
        <div>{this.state.start+''}</div>
        <div> We have liftoff </div>
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