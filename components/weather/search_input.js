import { Component } from 'react';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <p>Type in your zip code to see how awful the weather is in your area this week!</p>
          <input></input>
        </form>
        <style jsx>{`
          input {
            border: 1px solid purple;
          }
          p {
            display: block;
            color: black;
          }
        `}</style>
      </div>
    )
  }
}
