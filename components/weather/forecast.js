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
    let spinnerClass = this.props.loading ? "spinner" : "";
    debugger
    return (
      <div id="forecast">
      <i className={spinnerClass}></i>
        <ul>
          {weatherItems}
        </ul>
        <style jsx>{`
          .spinner{
            width: 80px;
            height: 80px;

            border: 2px solid #f3f3f3;
            border-top:3px solid #f25a41;
            border-radius: 100%;

            position: absolute;
            top: 200%;
            bottom:0;
            left:0;
            right: 0;
            margin: auto;

            animation: spin 1s infinite linear;
          }

          @keyframes spin {
            from{
                transform: rotate(0deg);
            }to{
                transform: rotate(360deg);
            }
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
            @media (max-height: 530px) {
              .spinner {
                top: 1200px;
              }
            }
          }
        `}</style>
      </div>
    )
  }
}
