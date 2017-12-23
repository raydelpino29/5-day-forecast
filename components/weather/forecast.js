import { Component } from 'react';
import WeatherItem from './weather_item';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps () {
    this.setState({ forecast: this.props.forecast });
  }

  render() {
    const weatherItems = Object.keys(this.props.forecast).map((day, idx) => {
      return (
        <li>
          <WeatherItem key={idx} forecast={this.props.forecast} day={day}/>
          <style jsx>{`
            li {
              list-style: none;
            }
          `}</style>
        </li>
      );
    });
    return (
      <div>
        <ul>
          {weatherItems}
        </ul>
        <style jsx>{`
          input {
            border: 1px solid purple;
          }
          p {
            display: block;
            color: black;
          }
          div {
            background: orange;
            height: 50%;
            display: block;
            margin: 0 auto;
          }
          ul {
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}
