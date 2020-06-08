import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My 2020 React Kingdom</h2>
        </div>
        <p className="App-intro">
          Muahahahaha!
        </p>

        <Person name="Sonya" age="35" />
        <Person name="Zurab" age="38" >Hobbies: racing</Person>
        <Person name="Max" age="40" />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello World"))
  }
}

export default App;
