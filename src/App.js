import React, { Component } from 'react';
import logo from './images/flor.svg';
import './App.css';
import Portada from './components/Portada';
import Quienes from './components/Quienes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Acacia
        </div>
        <Portada/>
        <div className="Bar"></div>
        <Quienes/>
      </div>
    );
  }
}

export default App;
