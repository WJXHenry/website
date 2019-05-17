import React, { Component } from 'react';
import Game from './Phaser/Game';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Website?!?!?
          </p>
        </header> */}
        <div>Phaser Game</div>
        {/* <phaserMain /> */}
        <Game />
        {/* <div>Hello again</div> */}
      </div>
    );
  }
}

export default App;
