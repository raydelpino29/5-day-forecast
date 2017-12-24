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
        <li key={idx}>
          <WeatherItem forecast={this.props.forecast} day={day}/>
          <style jsx>{`
            li {
              list-style: none;
              display: block;
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
            width: 350px;
          }
          div {
            background: orange;
            height: 100%;
            display: block;
            margin: 0 auto;
          }
          ul {
            display: flex;
            justify-content: center;
            padding: 0;
            margin: 0;
            position: relative;
            top: 33%;
            position: relative;
            right: 15px;
          }
        `}</style>
      </div>
    )
  }
}
