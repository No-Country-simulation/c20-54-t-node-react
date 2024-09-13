import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/LoginBanner.css";

const RegisterBooking = () => {
  const [formData, setFormData] = useState({
    email: "",
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
      // Hacemos la solicitud POST para registrar
      const response = await axios.post("", formData);

      console.log("Respuesta del servidor:", response.data);

      if (response.data.success) {
        // Suponemos que el servidor devuelve un éxito al registrar
        setSuccess(true);
      }
    } catch (err) {
      console.error("Error en el registro:", err);
      setError("Error al registrar. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="login-container">
        <div className="login-banner">
          <h1 className="font-bold font-title text-primary-color">
            Crear una cuenta
          </h1>
          <p className="text-primary-color font-bold">
            Regístrate para empezar
          </p>
        </div>
        <div className="login-form bg-bg-info font-bold w-full">
          <form onSubmit={handleSubmit}>
            <h2>Registro</h2>

            {error && <p className="text-red-500">{error}</p>}
            {success && (
              <p className="text-green-500">
                ¡Registro exitoso! Ahora puedes iniciar sesión.
              </p>
            )}

            <div className="my-4 flex flex-col justify-center items-center font-bold">
              <label htmlFor="email">email:</label>
              <input
                className="rounded-full flex text-sm py-2 px-4 md:me-0"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="my-4 flex flex-col justify-center items-center font-bold">
              <label htmlFor="password">Contraseña:</label>
              <input
                className="rounded-full flex text-sm py-2 px-4"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="my-4 flex flex-col justify-center items-center">
              <button
                className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                type="submit"
                disabled={loading}
              >
                {loading ? "Registrando..." : "Registrarse"}
              </button>
            </div>

            <div className="registrarse">
              <button className="registrarse">
                <Link to={"/login"}>¿Ya tienes una cuenta? Inicia sesión</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterBooking;
