import { Component } from 'react';
import Forecast from './forecast';
import axios from 'axios';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {zip: "", forecast: null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ zip: e.target.value });
  }

  parseForecast (weather) {
    const date = new Date().toString().split(" "); // ex: ["Sat", "Sep", "09", "2017", "00:00:00", "GMT-0400", "(EDT)"]
    let monthLength = 31;
    const thirtymonths = ["Sep", "Apr", "Jun", "Nov"];
    if (date[1] === "Feb") {
       monthLength = parseInt(date[3]) % 4 === 0 ? 29 : 28;
    } else if (thirtymonths.includes(date[1])) {
      monthLength = 30;
    }
    let fiveDays = new Set();
    let count = 0;
    while (Object.values(fiveDays).length < 5) {
      const day = parseInt(new Date().toString().split(" ")[2]);
      fiveDays.push((day + count) % monthLength);
      count++;
    }
    let forecast = {};
    Object.values(weather.data.list).filter((info) => {
      const date = new Date(info.dt).toString().split(" ");
      const dayNumber = date[2];
      const weekDay = date[0];

      if (forecast[dayNumber]) {
        continue;
      } else if (fiveDays.has(dayNumber)) {
        const temp = Math.floor((info.main.temp * 9/5) - 459.67);
        forecast[weekDay] = temp;
      }
    });
    this.setState({ forecast });
  }

  handleSubmit () {
    e.preventDefault();
    const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?zip=";
    const zip = `${this.state.zip}`;
    const fullUrl = baseUrl + zip + "&appid=670e6d2b31b62201dc47b79f5a87b500";
    axios.get(fullUrl).then((weather) => {
      console.log(weather);
      this.parseForecast(weather);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Type in your zip code to see how awful the weather is in your area this week!</p>
          <input onChange={this.handleChange}></input>
        </form>
        <Forecast forecase={this.state.forecast}/>
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
