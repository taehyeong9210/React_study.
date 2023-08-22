import { Component } from 'react';
import Mycomponent from './Mycomponent';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <>
        <div className="react">{name}</div>
        <Mycomponent>리액트</Mycomponent>
      </>
    );
  }
}

export default App;
