import React, { useState } from "react";
import "../assets/css/LoginBanner.css";

const LoginBooking = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log("Datos enviados:", formData);
  };

  return (
    <>
      <div className="w-full">
        <div className="login-container">
          <div className="login-banner">
            <h1 className="font-bold font-title text-primary-color text-xl">
              Bienvenido
            </h1>
            <p className=" text-primary-color font-bold">
              Inicia sesión para continuar
            </p>
          </div>
          <div className="login-form  bg-bg-info font-bold ">
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>

              <div className=" my-4 flex flex-col justify-center items-center font-bold">
                <label htmlFor="email">Email:</label>
                <input
                className="rounded-full"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className=" my-4 flex flex-col justify-center items-center font-bold">
                <label htmlFor="password">Contraseña:</label>
                <input
                className="rounded-full"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className=" my-4 flex flex-col justify-center items-center">
                <button
                  className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBooking;
