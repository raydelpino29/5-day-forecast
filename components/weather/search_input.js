import { Component } from 'react';
import Forecast from './forecast';
import axios from 'axios';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {zip: "", forecast: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ zip: e.target.value });
  }

  parseForecast (weather) {
    const date = new Date().toString().split(" "); // ex: ["Sat", "Sep", "09", "2017", "00:00:00", "GMT-0400", "(EDT)"]
    // be sure to adjust for days late at night, and make the date be the first date listed in the forecast data
    let monthLength = 31;
    const thirtymonths = ["Sep", "Apr", "Jun", "Nov"];
    if (date[1] === "Feb") {
       monthLength = parseInt(date[3]) % 4 === 0 ? 29 : 28;
    } else if (thirtymonths.includes(date[1])) {
      monthLength = 30;
    }
    let fiveDays = [];
    let count = 0;
    while (fiveDays.length < 5) {
      const day = parseInt(new Date().toString().split(" ")[2]);
      fiveDays.push((day + count) % monthLength);
      count++;
    }
    let forecast = {};
    Object.values(weather.data.list).forEach((info) => {
      const date = new Date(info.dt*1000).toString().split(" ");
      const dayNumber = parseInt(date[2]);
      const weekDay = date[0];

      if (forecast[dayNumber]) {
        return;
      } else if (fiveDays.includes(dayNumber)) {
        const temp = Math.floor((info.main.temp * 9/5) - 459.67);
        forecast[weekDay] = temp;
      }
    });
    debugger
    this.setState({ forecast });
  }

  handleSubmit (e) {
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
        <section>
          <h1>Weather app</h1>
          <p>Type in your zip code to see how awful the weather is in your area this week.</p>
          <input placeholder="000000" onChange={this.handleChange} value={this.state.zip} />
        </section>
        </form>
        <Forecast forecast={this.state.forecast}/>
        <style jsx>{`
          h1 {
            font-size: 35px;
          }
          input {
            padding: 2% 2%;
            width: 50%;
            background: transparent;
            border: 2px solid white;
            font-size: 30px;
          }
          p {
            display: block;
            color: black;
            width: 370px;
            font-size: 17px;
            font-family: "Tiempo";
            margin-bottom: 40px;
          }
          div {
            min-height: 560px;
          }
          section {
            margin-left: 5%;
            position: relative;
            top: 25%;
          }
          form {
            height: 100%;
            background: blue;
            margin-bottom: 15px;
          }
          @media (max-width: 768px) {
            input {
              width: 60%;
            }
            div {
              min-height: 680px;
            }
          }
        `}</style>
      </div>
    )
  }
}
