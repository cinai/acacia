import React from 'react';
import videoQuienes from '../videos/Light - 9514.mp4'
import logo from '../images/arbol.svg';

const Quienes = () => {
  return (
    <div className="segundo">
      <video id="videobcg" className="video2" preload="auto" autoPlay="(true)" loop="loop" muted="muted" volume="0">
          <source src={videoQuienes} type="video/mp4"></source>
          Sorry, your browser does not support HTML5 video.
      </video>
      <header className="viewport-header2">
        <span className="text-header3">
          <p>
            Combinamos los últimos avances en Machine Learning para crear mejores soluciones
          </p>
        </span>
        <span className="text-header4">
          <h4>
            <img src={logo} className="logo" alt="logo" />Predicción de Demanda
          </h4>
          <span className="prueba">
            ¿Cuál será la demanda en los siguientes períodos para que podamos planificarnos adecuadamente?
          </span>
          <h4>
            <img src={logo} className="logo" alt="logo" />Predicción de Demanda
            Segmentación de Clientes
          </h4>
          <span className="prueba">
            ¿Cuáles son las características que describen a nuestros distintos tipos de clientes y cómo usarlas para ofrecer un mejor servicio?
          </span>
          <h4>
            <img src={logo} className="logo" alt="logo" />Predicción de Demanda
            Customer Targeting
          </h4>
          <span className="prueba">
          ¿Cómo planificar promociones u ofertas a potenciales clientes en base a datos históricos de clientes anteriores?
          </span>
          <h4>
          <img src={logo} className="logo" alt="logo" />Predicción de Demanda
          Recomendación de Productos
          </h4>

        </span>
        
      </header>
    </div>
  )
}

export default Quienes;