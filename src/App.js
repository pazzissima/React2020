import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'supermax'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }


  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My 2020 React Kingdom</h2>
        </div>


        <UserInput changed={this.usernameChangedHandler}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="James Bond"/>



      </div>
    );
    
  }
}

export default App;
