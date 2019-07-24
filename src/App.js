import React, { Component } from 'react';
import logo from './images/flor.svg';
import './App.css';

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
        <div className="Bar"><div className="footnote">Acacia SpA<br/>2019</div></div>
      </div>
    );
  }
} 

export default App;
