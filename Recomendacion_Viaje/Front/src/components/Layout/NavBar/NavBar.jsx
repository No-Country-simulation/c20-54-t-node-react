import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { getUserById } from "../../../services/userServices";

const NavBar = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState();

  useEffect(() => {
    const user = localStorage.getItem("user_id")
    getUserById(user).then((response) => {
        setUser(response.data)
    }).catch((e)=> console.log(e))
  }, [])
  
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

  return (
    <header className="w-full m-0 p-0">
      <nav className="w-full flex justify-around items-center py-2.5 px-0 bg-secondary-color text-primary-color">
        <Link to={`/`} className="w-1/5 logo text-3xl font-logo">
          Agencia x
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
              // onClick={() => navigate(`/myBooking`)}
              type="button"
              className="p-4 w-8 h-8 flex justify-center items-center text-base bg-primary-color text-secondary-color font-bold rounded-full text-center"
            >
              {user.name.charAt()}{" "}
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
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
