import React, { Component } from 'react';
import logo from './images/flor.svg';
import './App.css';
import Portada from './components/Portada';
import Quienes from './components/Quienes';
import Servicios from './components/Servicios';

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
            <li><a href="#Servicios">Servicios</a></li>
            <li><a href="#Nosotros">Nosotros</a></li>
          </ul>
        </div>
        <Portada/>
        <Servicios/>
        <Quienes/>
        <div className="Bar"><div className="footnote">Acacia SpA<br/>2019</div></div>
      </div>
    );
  }
} 

export default App;
