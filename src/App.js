import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: "Max", age: 38},
      {name: "Sonya", age: 36},
      {name: "Vasya", age: 40}
    ],
    otherState: "Some other state"
  });


  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: "Zurab", age: 40},
        {name: "Sonechka", age: 36},
        {name: "Vasya", age: 41}
      ]
    })
  }

  console.log(personsState)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My 2020 React Kingdom</h2>
        </div>
        <p className="App-intro">
          Muahahahaha!
        </p>
        <button onClick={switchNameHandler}>Switch name</button>

        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >Hobbies: racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello World"))
}

export default App;
