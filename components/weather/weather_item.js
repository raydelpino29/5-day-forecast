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
        p, small {
          font-family: "Apercu", sans-serif;
          color: #fff;
        }
        div {
          border: 1px solid #e7e7e7;
          text-align: center;
          width: 15vw;
        }
        .day {
          font-size: 1.5vw;
        }
        section p {
          font-family: "Tiempos", serif;
          font-weight: 600;
          font-size: 7vw;
          display: inline;
          letter-spacing: 4px;
        }
        section {
          border-top: 1px solid #e7e7e7;
          padding: 15px 30px;
        }
        small {
          font-size: 2.5vw;
          color: #fff;
          position: relative;
          left: 5px;
        }
        @media only screen and (max-width: 768px) {
          div {
            min-width: 120px;
          }
          section p {
            font-size: 35px;
          }
          section {
            padding: 9%;
          }
          .day {
            font-size: 15px;
            margin: 9px;
          }
          small {
            font-size: 15px;
          }
          @media only screen and (max-width: 480px) {
            div {
              min-width: 110px;
            }
            section p {
              font-size: 10vw;
            }
          }
        }
      `}</style>
    </div>
  )
};

export default WeatherItem;
