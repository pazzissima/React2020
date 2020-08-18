import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Teng", age: 39},
      {name: "Zurab", age: 38},
      {name: "Sonya", age: 36}
    ]
  }

  switchNameHandler = () => {
    //console.log("Was clicked!")
    this.setState( {
      persons: [
        {name: "Tengazzo", age: 40},
        {name: "Zu", age: 45},
        {name: "Sonechka", age: 36}
      ]
    })
  }

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
        <button onClick={this.switchNameHandler}>Switch name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler}>Hobbies: racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello World"))
  }
}

export default App;
