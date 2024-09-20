import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/Booking.css";

const RegisterBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    idAt: "",
    email: "",
    dateBirth: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleDateChange = (e) => {
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

    // Obtener la fecha de nacimiento del formulario
    const [year, month, day] = formData.dateBirth.split("-"); // Asumiendo que el formato actual es yyyy-mm-dd

    // Cambiar el formato a mm/dd/yyyy
    const formattedDateBirth = `${day}-${month}-${year}`;

    // Crear una copia de formData con la fecha de nacimiento formateada
    const updatedFormData = {
      ...formData,
      dateBirth: formattedDateBirth,
    };

    try {
      // Hacemos la solicitud POST con la fecha de nacimiento en formato mm/dd/yyyy
      const response = await axios.post(
        "https://c20-54-t-node-react.onrender.com/api/v1/users/register",
        updatedFormData
      );


      if (response.data.success) {
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
      <div className="reservation-container">
        <div className="reservation-banner">
          <h1 className="font-bold font-title text-primary-color">
            Crear una cuenta
          </h1>
          <p className="text-primary-color font-bold">
            Regístrate para empezar
          </p>
        </div>
        <div className="reservation-form bg-bg-info font-bold w-full">
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}
            {success && (
              <p className="text-green-500">
                ¡Registro exitoso! Ahora puedes iniciar sesión.
              </p>
            )}

            <div className="my-4  font-bold ">
              <label htmlFor="firstName">Nombre:</label>
              <input
                className="rounded-full flex text-sm w-full  py-2 px-4 md:me-0"
                type="text"
                id="name"
                name="name"
                value={formData.firstName}
                onChange={handleDateChange}
                required
              />
            </div>

            <div className="my-4 font-bold ">
              <label htmlFor="lastName">Apellido:</label>
              <input
                className="rounded-full flex text-sm w-full  py-2 px-4 md:me-0"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleDateChange}
                required
              />
            </div>

            <div className="my-4 font-bold ">
              <label htmlFor="dni">DNI:</label>
              <input
                className="rounded-full flex text-sm w-full  py-2 px-4 md:me-0"
                type="text"
                id="dni"
                name="idAt"
                value={formData.idAt}
                onChange={handleDateChange}
                required
              />
            </div>

            <div className="my-4 font-bold ">
              <label htmlFor="email">Email:</label>
              <input
                className="rounded-full flex text-sm w-full  py-2 px-4 md:me-0 "
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleDateChange}
                required
              />
            </div>

            <div className=" my-4 ">
              <label className="font-bold" htmlFor="dateBirth">
                Fecha de Nacimiento:
              </label>
              <input
                className="rounded-full flex text-sm w-full py-2 px-4 md:me-0 "
                type="Date"
                id="dateBirth"
                name="dateBirth"
                value={formData.dateBirth}
                onChange={handleDateChange}
                required
              />
            </div>
            <div className="my-4 font-bold">
              <label htmlFor="password">Contraseña:</label>
              <input
                className="rounded-full flex text-sm w-full  py-2 px-4 md:me-0 "
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleDateChange}
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
