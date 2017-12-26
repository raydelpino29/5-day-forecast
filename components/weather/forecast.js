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
            @media (max-width: 768px) {
              li {
                padding-bottom: 10px;
              }
            }
          `}</style>
        </li>
      );
    });
    return (
      <div id="forecast">
        <ul>
          {weatherItems}
        </ul>
        <style jsx>{`
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
            padding: 0;
            margin: 0;
            position: relative;
            top: 33%;
            justify-content: center;
          }
          @media (max-width: 768px) {
            ul {
              display: block
              width: 20%;
              margin: 0 auto;
              top: 2%;
            }
          }
        `}</style>
      </div>
    )
  }
}
