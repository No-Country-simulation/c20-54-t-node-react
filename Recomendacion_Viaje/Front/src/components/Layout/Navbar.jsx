import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-solid border-indigo-200 mb-4 ">
    <div className="w-full bg-secondary-color flex flex-wrap items-center justify-between mx-auto px-8 py-2 rounded-full">
      <Link
        to={`/`}
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        {/* <img src={logo} className="w-20 h-8" alt="Logo" /> */}
        <h2 className="font-logo text-2xl text-primary-color">Agencia X</h2>
      </Link>
      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {/* {user?.email ? (
          <button
          onClick={() =>navigate(`/profile`)}
          type="button"
          className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
          >{user.email}</button>
        ) : (
          <button
            onClick={() => dispatch(showLogin(true))}
            type="button"
            className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
          >
            Sing In
          </button>
        )} */}
        <button
            // onClick={() => dispatch(showLogin(true))}
            type="button"
            className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
          >
            Sing In
          </button>
        <div
          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
              name@flowbite.com
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Perfil
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Configuraciones
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Cerrar Sesion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
