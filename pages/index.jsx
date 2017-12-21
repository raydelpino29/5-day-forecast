import { Component } from 'react';
import Head from 'next/head';
import SearchInput from '../components/weather/search_input';

export default class Page extends Component {
  async getInitialProps() {
    return { };
  }

  render() {
    return (
      <div>
        <Head>
          <title>Take-home Project</title>
        </Head>
        <SearchInput />
      </div>
    )
  }
}
