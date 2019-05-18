import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MazeGamePage from './pages/MazeGamePage';
import './App.css';

class App extends Component {
  render() {
    console.log(process.env.PUBLIC_URL)
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Route exact path='/' component={HomePage} />
          <Route exact path='/game' component={MazeGamePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
