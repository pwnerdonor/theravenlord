import React, { Component } from 'react';
import logo from './images/raven.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Ravenlord</h1>
        </header>
        <p className="App-intro">
          This is where the site content would go, if there were any.
        </p>
      </div>
    );
  }
}

export default App;
