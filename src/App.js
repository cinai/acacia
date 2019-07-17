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
          <div id="App-logo">
            <img src={logo} className="logo-image" alt="logo" />
            Acacia
          </div>
          <ul class="navigation">
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Nosotros</a></li>
          </ul>
        </div>
        <Portada/>
      </div>
    );
  }
} 

export default App;
