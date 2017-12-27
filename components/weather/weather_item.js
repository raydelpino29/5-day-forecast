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
        .day {
          font-size: 1.5vw;
        }
        section p {
          font-size: 7vw;
          padding: 0 1vw;
          display: inline;
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
            font-size: 45px;
          }
          section {
            padding: 2px;
          }
          .day {
            font-size: 15px;
            margin: 9px;
          }
          small {
            font-size: 15px;
          }
          @media (max-width: 480px) {
            div {
              min-width: 110px;
            }
            section p {
              font-size: 11vw;
            }
          }
        }
      `}</style>
    </div>
  )
};

export default WeatherItem;
