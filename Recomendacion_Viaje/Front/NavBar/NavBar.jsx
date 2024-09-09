import React, { useState } from 'react';
import './NavBar.css';
import { gsap } from 'gsap';

const NavBar = () => {

  React.useEffect(() => {
    // Animación GSAP para la carga inicial
    gsap.to('.logo', {
         duration: 2, 
         x: 50, 
         opacity: 1, 
         ease:"power2.inOut", 
        });
    gsap.to('.nav-links li', {
         duration: 1, 
         x: 100, 
         opacity: 1, 
         stagger: 0.2, 
         ease: "power2.inOut" });
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">VIAJES</div>
        <ul className={`nav-links`}>
          <li><a href="#inicio">Home</a></li>
          <li><a href="#servicios">Paquetes</a></li>
          <li><a href="#RESERVAR">Reservar</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
