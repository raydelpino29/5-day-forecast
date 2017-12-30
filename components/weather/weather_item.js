import { Component } from 'react';
import ReactFontFace from 'react-font-face'

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
        @font-face {
          font-family: "Apercu";
          src:
          local("apercu_bold_italic_pro.otf") format("opentype"),
          local("apercu_bold_pro.otf") format("opentype"),
          local("apercu_medium_italic_pro.otf") format("opentype"),
          local("apercu_regular_italic_pro.otf") format("opentype"),
          local("apercu_regular_pro.otf") format("opentype"),
          local("apercu_medium_pro.otf") format("opentype");
        }
        p, small {
          font-family: Tiempos;
          font-weight: lighter;
          color: #fff;
        }
        div {
          border: 1px solid #e7e7e7;
          margin: 0 1vw;
          text-align: center;
        }
        .day {
          font-size: 1.5vw;
        }
        section p {
          font-size: 45px;
          padding: 0 1vw;
          display: inline;
        }
        section {
          border-top: 1px solid #e7e7e7;
          padding: 10px 20px;
        }
        small {
          font-size: 2vw;
          color: #fff;
        }
        @media (max-width: 768px) {
          div {
            min-width: 120px;
          }
          section p {
            font-size: 45px;
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
