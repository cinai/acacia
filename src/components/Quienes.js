import React from 'react';
import catalina from '../images/catalina.jpg';
import abelino from '../images/abelino.jpg';

const Quienes = () => {
  return (
    <div className="tercero" id="Nosotros">
      <div className="titulo"><h5>Nosotros</h5></div>
      <div className="texto">
        <p>
        Nuestro equipo cuenta con basta experiencia en proyectos de Data Science 
        y Machine Learning, tanto en Chile como en el extranjero.
        </p>

        <p>      
        Nuestro equipo fue ganador del Challenge organizado por Walmart Chile 
        “Prediccion de demandas para promociones”. 
        
        De entre XX equipos participantes, fuimos seleccionados como ganadores, 
        permitiendo implementar nuestra propuesta para la toma de decisiones de la empresa.
        </p>
      </div>
      <div className="integrantes">
        <div className="card2">
          <h4>
          <img src={abelino} className="foto" alt="Abelino Jimenez" />Abelino Jimenez
          </h4>
          <span className="prueba">
          PhD Electrical and Computer Engineering. Carnegie Mellon University
          Msc Electrical and Computer Engineering. Carnegie Mellon University
          Ingeniero Civil Matemático. Universidad de Chile

          </span>
        </div>
        <div className="card2">
          <h4>
          <img src={catalina} className="foto" alt="Catalina Espinoza" />Catalina Espinoza
          </h4>
          <span className="prueba">
          Magíster en Ciencias mención Computación. Universidad de Chile
          Ingeniera Civil en Computación. Universidad de Chile
          </span>
        </div>
      </div>
    </div>
  )
}

export default Quienes;