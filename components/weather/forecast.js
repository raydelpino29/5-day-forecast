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
              display: flex;
              padding: 0 7px;
              justify-content: center;
            }
            @media (max-width: 768px) {
              li {
                padding: 5% 15%;
              }
            }
          `}</style>
        </li>
      );
    });
    let spinnerClass = this.props.loading ? "spinner" : "";
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
            top: 0;
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
            position: relative;
            height: 100%;
            display: block;
          }
          ul {
            display: flex;
            padding: 0;
            margin: 0;
            position: relative;
            justify-content: center;
            top: 50%;
            transform: translateY(-50%);
          }
          @media (max-width: 768px) {
            ul {
              flex-direction: column;
              width: 20%;
              margin: 0 auto;
            }
          }
        `}</style>
      </div>
    )
  }
}
