import React, { useState } from 'react';
import './NavBar.css';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

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
      <nav className="flex justify-around items-center py-2.5 px-3 bg-secondary-color text-primary-color">
        <div className="text-2xl font-bold">VIAJES</div>
        <ul className={`list-none flex m-0 p-0`}>
          <li className='mr-2.5'><Link to={`/`} className='text-primary-color text-base transition-colors duration-300 hover:text-action-color' >Home</Link></li>
          <li className='mr-2.5'><Link to={`/`} className='text-primary-color text-base transition-colors duration-300 hover:text-action-color' >Reservar</Link></li>
          <li className='mr-2.5'><Link to={`/`} className='text-primary-color text-base transition-colors duration-300 hover:text-action-color' >Contacto</Link></li>
          {/* <li className='mr-2.5'><a href="#servicios">Paquetes</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
