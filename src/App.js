import React, { Component } from 'react';
import logo from './images/LogoAcacia_Imagen.png';
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
            <span className="aver">acac<font color="#2278ff">ia</font> </span>
          </div>
          <ul className="navigation">
            <li><a href="#Servicios">Servicios</a></li>
            <li><a href="#Nosotros">Nosotros</a></li>
          </ul>
        </div>
        <Portada/>
        <Servicios/>
        <Quienes/>
        <div className="Bar"></div>
        <div className="Barfoot"><div className="footnote">contacto@acacia.cl</div></div>
      </div>
    );
  }
} 

export default App;
