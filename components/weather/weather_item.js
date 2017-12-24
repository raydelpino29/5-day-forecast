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
          margin: 0 1vw;
          text-align: center;
        }
        div p {
          font-size: 1.5vw;
        }
        section p {
          font-size: 7vw;
          padding: 0 1vw;
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
          font-size: 2vw;
        }
        @media (max-width: 768px) {
          div {
            min-width: 120px;
          }
          section p {
            font-size: 50px;
          }
          .div p {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  )
};

export default WeatherItem;