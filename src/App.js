import React, { Component } from 'react';
import Game from './components/phaser/Game';
import logo from './logo.svg';
import './App.css';

class App extends Component {z
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Website
          </p>
        </header> */}
        <div>Hello</div>
        <Game />
        <div>Hello again</div>
      </div>
    );
  }
}

export default App;
