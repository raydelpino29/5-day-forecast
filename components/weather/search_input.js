import { Component } from 'react';
import axios from 'axios';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {zip: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ zip: e.target.value });
  }

  handleSubmit () {
    axios.get(`api.openweathermap.org/data/2.5/forecast?zip=${this.state}`)
    .then((weather) => {
      debugger
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Type in your zip code to see how awful the weather is in your area this week!</p>
          <input onChange={this.handleChange}></input>
        </form>
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
