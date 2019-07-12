import React from 'react';
import videoPortada from '../videos/Pexels.mp4'

const Portada = () => {
  return (
    <div className="primer">
      <video id="videobcg" className="video" preload="auto" autoPlay="(true)" loop="loop" muted="muted" volume="0">
          <source src={videoPortada} type="video/mp4"></source>
          Sorry, your browser does not support HTML5 video.
      </video>
      <header className="viewport-header">
        <span className="text-header2">
          <h3>Machine Learning para<br/> Business Intelligence </h3>
        </span>
        <span className="text-header">
          AcacIA ofrece soluciones de softwares basados en Inteligencia Artificial 
          que permiten la automatización y optimización de distintos procesos operacionales de su compañía, apoyando y mejorando la toma de decisiones.
        </span>
      </header>
    </div>
  )
}

export default Portada;