import { Component } from 'react';

const WeatherItem = ({ forecast, day }) => {
  const weekDays = {"Mon":"Monday", "Tue": "Tuesday", "Wed":"Wednesday",
          "Thu":"Thursday", "Fri":"Friday", "Sat":"Saturday", "Sun":"Sunday"};
  return (
    <div>
      <p className="day">{weekDays[day]}</p>
      <section>
        <p>{forecast[day]}</p><small>F</small>
      </section>
      <style jsx>{`
        div {
          border: 1px solid #e7e7e7;
          text-align: center;
          width: 17vw;
        }
        section {
          border-top: 1px solid #e7e7e7;
          padding: 15px 30px;
        }
        p, small {
          font-family: "Apercu", sans-serif;
          color: #fff;
        }
        small {
          font-size: 2.5vw;
          color: #fff;
          position: relative;
          left: 5px;
        }
        section p {
          font-family: "Tiempos", serif;
          font-weight: 600;
          font-size: 7vw;
          display: inline;
          letter-spacing: 4px;
        }
        .day {
          font-size: 1.5vw;
        }
        @media only screen and (max-width: 768px) {
          div {
            min-width: 120px;
          }
          section {
            padding: 9%;
          }
          small {
            font-size: 15px;
          }
          section p {
            font-size: 33px;
          }
          .day {
            font-size: 12px;
            margin: 9px;
          }
          @media only screen and (max-width: 480px) {
            div {
              min-width: 110px;
            }
            section p {
              font-size: 35px;
            }
          }
        }
      `}</style>
    </div>
  )
};

export default WeatherItem;
