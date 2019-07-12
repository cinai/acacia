import React, { Component } from 'react';
import logo from './images/flor.svg';
import './App.css';
import Portada from './components/Portada';
import Quienes from './components/Quienes';

class App extends Component {
  render() {
    let width = window.innerWidth;
    if (width > 708) {
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
    else {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            Acacia
          </div>
        <header className="viewport-header">
          <span className="text-header5">
            <h3>Machine Learning para<br/> Business Intelligence </h3>
          </span>
        </header>
        <header className="viewport-header3">
          <span className="text-header6">
            AcacIA ofrece soluciones de softwares basados en Inteligencia Artificial 
            que permiten la automatización y optimización de distintos procesos operacionales de su compañía, apoyando y mejorando la toma de decisiones.
          </span>
        </header>
        </div>
      );
    }
  }
} 

export default App;
