import { Component } from 'react';

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
        <li key={idx} >{day} {this.props.forecast[day]}F</li>
      )
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
          }
        `}</style>
      </div>
    )
  }
}
