import React from 'react';
import videoPortada from '../videos/Pexels.mp4'

const Portada = () => {
  if (window.innerWidth < 767) {
   return (
    <div className="primer">
      <span className="text-header2">
          <h3>Machine Learning para<br/> Business Intelligence </h3>
      </span>
      <span className="text-header1">
        AcacIA ofrece soluciones de softwares basados en Inteligencia Artificial 
        que permiten la automatización y optimización de distintos procesos operacionales de su compañía, apoyando y mejorando la toma de decisiones.
      </span>
    </div>
   ) 
  }
  return (
    <div>
      <div className="primer">
        <video id="videobcg" className="video" preload="auto" autoPlay="(true)" loop="loop" muted="muted" volume="0">
            <source src={videoPortada} type="video/mp4"></source>
            Sorry, your browser does not support HTML5 video.
        </video>
        <header className="viewport-header">
          <span className="text-header1">
            AcacIA ofrece soluciones de Inteligencia Artificial 
            para automatizar y optimizar procesos de su compañía, apoyando y mejorando la toma de decisiones. Integramos soluciones al ecosistema de su negocio, con énfasis en la experiencia de usuario.
          </span>
          <span className="text-header2">
            <h3>Machine Learning para<br/> Business Intelligence </h3>
          </span>
        </header>
      </div>
      <div className="Bar"></div>

    </div>
  )
}

export default Portada;