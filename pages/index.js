import { Component } from 'react';
import Head from 'next/head';
import SearchInput from '../components/weather/search_input';

export default class Page extends Component {
  async getInitialProps() {
    return { };
  }

  render() {
    return (
      <div className="root" >
        <Head>
          <title>Common Weather App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <SearchInput />
        <style jsx global>{`
          html {
            position: relative;
            top: -29px;
            left: -8px;
          }
          html, body, div {
            height: 100%;
            width: 100%;
          }
          @font-face {
            font-family: 'Tiempos';
            src: url('.fonts/TiemposHeadline-Semibold.otf');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'Apercu'
              src: url('./fonts/Apercu/apercu_bold_italic_pro.otf');
              src: url('./fonts/Apercu/apercu_bold_pro.otf') format('opentype');
              src: url('./fonts/Apercu/apercu_medium_italic_pro.otf') format('opentype');
              src: url('./fonts/Apercu/apercu_regular_italic_pro.otf') format('opentype');
              src: url('./fonts/Apercu/apercu_regular_pro.otf') format('opentype');
              src: url('./fonts/Apercu/apercu_medium_pro.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
      </div>
    )
  }
}
