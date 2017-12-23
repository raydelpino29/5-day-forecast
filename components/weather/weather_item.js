import { Component } from 'react';

const WeatherItem = ({ forecast, day }) => {
  const weekDays = {"Mon":"Monday", "Tue": "Tuesday", "Wed":"Wednesday", "Thu":"Thursday", "Fri":"Friday", "Sat":"Saturday", "Sun":"Sunday"};
  return (
    <div>
      <p className="day">{weekDays[day]}</p>
      <section>
        <p>{forecast[day]}</p><small>F</small>
      </section>
      <style jsx>{`
        div {
          border: 1px solid black;
          margin-left: 5px;
          text-align: center;
        }
        p {
          font-size: 30px;
          display: inline;
        }
        .day {
          font-size: 10px;
        }
        section {
          border-top: 1px solid black;
          padding: 10px 20px;
        }
      `}</style>
    </div>
  )
};

export default WeatherItem;
