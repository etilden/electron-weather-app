import React from 'react';

export default class WeatherHome extends React.Component {
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