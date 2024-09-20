import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { getUserById } from "../../../services/userServices";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [actual, setActual] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user_id");
    userData != null
      ? getUserById(userData)
          .then((response) => {
            setUser(response.data);
          })
          .catch((e) => console.log(e))
      : setUser(null);
  }, [actual]);

  React.useEffect(() => {
    // Animación GSAP para la carga inicial
    gsap.to(".logo", {
      duration: 2,
      x: 50,
      opacity: 1,
      ease: "power2.inOut",
    });
    gsap.to(".nav-links li", {
      duration: 1,
      x: 100,
      opacity: 1,
      stagger: 0.2,
      ease: "power2.inOut",
    });
  }, []);

  const handleLogout = (e) => {
    // e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setShowUserMenu(false);
    setActual(!actual);
    navigate("/");
  };
  return (
    <header className="w-full m-0 p-0">
      <nav className="w-full flex justify-around items-center py-2.5 px-0 bg-secondary-color text-primary-color">
        <Link to={`/`} className="w-1/5 logo text-3xl font-logo">
          PresuViaje
        </Link>
        <ul className="list-none flex nav-links justify-center ">
          <li className="mr-2.5">
            <Link
              to={`/`}
              className="text-primary-color text-base transition-colors duration-300 hover:text-action-color hover:font-bold"
            >
              Home
            </Link>
          </li>
          <li className="mr-2.5">
            <Link
              to={`/booking`}
              className="text-primary-color text-base transition-colors duration-300 hover:text-action-color hover:font-bold"
            >
              Reservar
            </Link>
          </li>
          <li className="mr-2.5">
            <a
              href="#contact"
              className="text-primary-color text-base transition-colors duration-300 hover:text-action-color hover:font-bold"
            >
              Contacto
            </a>
          </li>
        </ul>
        <div className="w-1/5 flex justify-end py-1">
          {user ? (
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              type="button"
              className="p-4 w-8 h-8 flex justify-center items-center text-base bg-primary-color text-secondary-color font-bold rounded-full text-center"
            >
              {user.name.charAt().toUpperCase()}
            </button>
          ) : (
            <button
              onClick={() => navigate(`/login`)}
              type="button"
              className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full"
            >
              Sing In
            </button>
          )}
          {showUserMenu ? (
            <div
              className="absolute top-8 right-5 z-50 my-4 text-base list-none bg-secondary-color divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 font-semibold">
                  Hola {user?.name}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to={`/myBookings`}
                    onClick={() => setShowUserMenu(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-color hover:text-secondary-color"
                  >
                    Mis Reservaciones
                  </Link>
                </li>
                <li>
                  <button
                    onClick={(e) => handleLogout(e)}
                    className="w-full block px-4 py-2 text-sm text-start text-gray-700 hover:bg-primary-color hover:text-secondary-color"
                  >
                    Cerrar Sesion
                  </button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
