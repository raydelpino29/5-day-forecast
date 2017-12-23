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
        </Head>
        <SearchInput />
        <style jsx global>{`
          html, body, div {
            height: 100%;
          }
        `}</style>
      </div>
    )
  }
}
