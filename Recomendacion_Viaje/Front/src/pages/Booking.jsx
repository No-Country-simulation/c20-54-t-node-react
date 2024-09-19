import React, { useState } from "react";
import axios from "axios";
import "../assets/css/Booking.css/";
import ReservationModal from "../components/ReservaModal";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    idAt: "",
    email: "",
    dateBirth: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
      // Realiza la solicitud POST usando Axios
      const response = await axios.post(
        "https://c20-54-t-node-react.onrender.com/api/v1/reservation",
        formData
      );

      // Si la solicitud es exitosa, manejamos la respuesta
      console.log("Respuesta del servidor:", response.data);

      setSuccess(true); // Indica que la reserva fue exitosa
    } catch (err) {
      console.error("Error al realizar la reserva:", err);
      setError("Hubo un error al procesar la reserva. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <ReservationModal />
      <div className="reservation-container">
        <div className="reservation-content">
          <div className="reservation-banner">
            <h1 className="font-bold font-title text-primary-color">
              Reserva tu Viaje Ahora
            </h1>
            <p className="font-bold text-primary-color">
              Completa los siguientes datos para realizar tu reserva
            </p>
            <div className="bg-bg-info "></div>
          </div>
          <div className="reservation-form  bg-bg-info">
            <form onSubmit={handleSubmit}>
              <div className="my-4  font-bold ">
                <label htmlFor="firstName">Nombre:</label>
                <input
                  className="rounded-full flex text-sm w-full  py-2 px-4 md:me-0"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="my-4 font-bold ">
                <label htmlFor="dni">DNI:</label>
                <input
                  className="rounded-full flex text-sm w-full  py-2 px-4 md:me-0"
                  type="text"
                  id="dni"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  required
                />
              </div>

              <div className=" my-4 ">
                <label className="font-bold" htmlFor="birthDate">
                  Fecha de Nacimiento:
                </label>
                <input
                  className="rounded-full flex text-sm w-full py-2 px-4 md:me-0 "
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                type="submit"
                disabled={loading}
              >
                {loading ? "Procesando..." : "Reservar"}
              </button>

              {success && (
                <p className="success-message">¡Reserva realizada con éxito!</p>
              )}
              {error && <p className="error-message">{error}</p>}
            </form>
            {/* Pasar los datos del formulario como props a ReservationDetails */}
            {/*   <ReservationDetails formData={formData} />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
