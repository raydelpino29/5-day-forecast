import { Component } from 'react';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = { forecast: this.props.forecast };
  }

  componentWillReceiveProps () {
    this.setState({ forecast: this.props.forecast });
  }

  render() {
    return (
      <div>
        <div>
          <p>{this.state.forecast}</p>
        </div>
        <style jsx>{`
          input {
            border: 1px solid purple;
          }
          p {
            display: block;
            color: black;
          }
        `}</style>
      </div>
    )
  }
}
