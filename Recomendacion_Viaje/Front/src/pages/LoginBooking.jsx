import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/LoginBanner.css";

const LoginBooking = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "", // Cambié 'username' por 'email' para mayor consistencia
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      console.log("formData:", formData);
      // Hacemos la solicitud POST para autenticar
      const response = await axios.post(
        "https://c20-54-t-node-react.onrender.com/api/v1/users/",
        formData
      );

      console.log("Respuesta del servidor:", response.data);

      // Suponemos que el servidor devuelve un token si la autenticación es exitosa
      if (response.data.data.token) {
        // Almacenar el token en el localStorage (o cookies) y manejar el éxito
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user_id", response.data.data.user._id);

        console.log("storage")
        setSuccess(true); // Cambiamos el estado a éxito
        navigate(`/`)
      }
    } catch (err) {
      console.error("Error de autenticación:", err);
      setError("Email o contraseña incorrectos"); // Muestra un mensaje de error
    } finally {
      setLoading(false); // Deshabilita el estado de carga
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="login-container">
          <div className="login-banner">
            <h1 className="font-bold font-title text-primary-color">
              Bienvenido
            </h1>
            <p className=" text-primary-color font-bold">
              Inicia sesión para continuar
            </p>
          </div>
          <div className="login-form bg-bg-info font-bold  w-full">
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>

              {error && <p className="text-red-500">{error}</p>}
              {success && (
                <p className="text-green-500">¡Inicio de sesión exitoso!</p>
              )}

              <div className=" my-4 flex flex-col justify-center items-center font-bold">
                <label htmlFor="email">Email:</label>
                <input
                  className="rounded-full flex text-sm  py-2 px-4 md:me-0 "
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
                  className="rounded-full flex text-sm  py-2 px-4 "
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
                  disabled={loading}
                >
                  {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                </button>
              </div>
              <div className="registrarse ">
                <button className=" registrarse">
                  <Link to={"/register "}>Registrarse</Link>
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
