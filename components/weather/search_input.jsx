import { Component } from 'react';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input></input>
        <style jsx>{`
          input {
            border: 1px solid purple;
          }
        `}</style>
      </div>
    )
  }
}
