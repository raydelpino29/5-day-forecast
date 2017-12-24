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
          margin-left: 15px;
          text-align: center;
        }
        div p {
          font-size: 100%;
        }
        section p {
          font-size: 10vw;
          display: inline;
        }
        .day {
          font-size: 10px;
        }
        section {
          border-top: 1px solid black;
          padding: 10px 20px;
        }
        small {
          font-size: 200%;
        }
      `}</style>
    </div>
  )
};

export default WeatherItem;
