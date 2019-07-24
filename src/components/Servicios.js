import React from 'react';
import logo from '../images/flor.svg';

const Servicios = () => {
  return (
    <div  id="Servicios">
      <div className="segundo">
      <header className="viewport-header2">
        <span className="text-header3">
          <p>
            Combinamos los últimos avances en Machine Learning para crear mejores soluciones
          </p>
        </span>
        <span className="text-header4">
          <div className="card">
            <h4>
              <img src={logo} className="logo" alt="logo" />Predicción de Demanda
            </h4>
            <span className="prueba">
              ¿Cuál será la demanda en los siguientes períodos para que podamos planificarnos adecuadamente?
            </span>
          </div>
          <div className="card">
            <h4>
              <img src={logo} className="logo" alt="logo" />Segmentación de Clientes
            </h4>
            <span className="prueba">
              ¿Cuáles son las características que describen a nuestros distintos tipos de clientes y cómo usarlas para ofrecer un mejor servicio?
            </span>
          </div>
          <div className="card">
            <h4>
              <img src={logo} className="logo" alt="logo" />Customer Targeting
            </h4>
            <span className="prueba">
            ¿Cómo planificar promociones u ofertas a potenciales clientes en base a datos históricos de clientes anteriores?
            </span>
          </div>
          <div className="card">
            <h4>
            <img src={logo} className="logo" alt="logo" />Recomendación de Productos
            </h4>
          </div>
        </span>
      </header>
    </div>

    </div>
  )
}

export default Servicios;