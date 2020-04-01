import React from 'react';

export default class WeatherHome extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      start: null
    }
  }

  componentDidMount() {
    this.setState({start: new Date(0 )})
  }

  render() {
    return(
      <div>Words Stuff</div>
    )
  }
}