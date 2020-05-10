import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //return (
    //  <div className="App">
    //    <div className="App-header">
    //      <img src={logo} className="App-logo" alt="logo" />
    //      <h2>My 2020 React Kingdom</h2>
    //    </div>
    //    <p className="App-intro">
    //      Muahahahaha!
    //    </p>
    //  </div>
    //);
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello World"))
  }
}

export default App;
