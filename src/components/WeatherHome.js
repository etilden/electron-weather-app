import React from 'react';
import { connect } from "react-redux";
import ReactAutocomplete from 'react-autocomplete';
import cities from "../city.list.json";
// import useScript from "../hooks/useScript"
// import { query } from "../hooks/query"

class WeatherHome extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      start: null,
      value: ''
    }
  }

  componentDidMount() {
    this.setState({start: new Date()})
    // useScript("https://code.jquery.com/jquery-1.12.4.js")
    // useScript("https://code.jquery.com/ui/1.12.1/jquery-ui.js")
    // useScript(query)
  }

  render() {
    return(
      <>
        <div>{this.state.start+''}</div>
        {this.props.weather.weather ? 
        <div><div>{this.props.weather.weather[0].main}</div><div>{this.props.weather.weather[0].description}</div></div> : null } 
        <ReactAutocomplete
          items={cities}
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
          onSelect={value => this.setState({ value })}
        />
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