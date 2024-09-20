import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importar axios si necesitas hacer la solicitud al backend
import { makeReservation } from "../services/ReservationsServices";
import "../assets/css/modal.css";

const ReservationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservaId, setReservaID] = useState(null);
  const [isForMe, setIsForMe] = useState(true); // Para identificar si es para el usuario o para otra persona
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",

    email: "",
  });
  const [loading, setLoading] = useState(false); // Estado para manejar el loading
  const [error, setError] = useState(""); // Estado para manejar errores

  const navigate = useNavigate();

  useEffect(() => {
    setIsModalOpen(true); // Abre el modal al montar el componente
  }, []);

  const closeModal = () => {
    setIsModalOpen(false); // Función para cerrar el modal
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Indicador de carga
    setError(""); // Limpiar errores previos

    // const reservationDetails = {
    //   name: isForMe ? "John" : userData.name, // Datos de ejemplo, debes reemplazar con los reales
    //   lastName: isForMe ? "Doe" : userData.lastName,
    //   email: isForMe ? "john.doe@example.com" : userData.email,

    // };

    // try {
    if (isForMe) {
      const packageId = localStorage.getItem("package"); //cambiarlo por el dato real
      const token = localStorage.getItem("token");

      const reservationData = {
        token: token,
        data: {
          isGuest: false,
          packageID: packageId,
        },
      };
      // Si la reserva es para el usuario
      console.log("Reserva para mí");

      // Aquí podrías hacer una petición al backend, si es necesario
      // const response = await axios.post(
      //   "https://c20-54-t-node-react.onrender.com/api/v1/reservation", // Reemplazar con el endpoint real
      //   reservationDetails
      // );
      // console.log("Reserva exitosa:", response.data);

      //ya habiamos creado un servicio para esto solo toca consumirlo

      makeReservation(reservationData)
        .then((response) =>
          navigate(`/reservation-details/${response.data._id}`)
        )
        .catch((e) => console.error(e));
    } else {
      // Si la reserva es para otra persona
      // console.log("Reserva para otra persona:", reservationDetails);

      // Cierra el modal
      closeModal();
    }
    // } catch (err) {
    //   console.error("Error al realizar la reserva:", err);
    //   setError("Hubo un problema al realizar la reserva. Inténtalo de nuevo.");
    // } finally {
    //   setLoading(false); // Deja de cargar después de la solicitud
    // }
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>¿Para quién es la reserva?</h2>
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Mostrar errores si existen */}
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  <input
                    type="radio"
                    name="reservationFor"
                    value="me"
                    checked={isForMe}
                    onChange={() => setIsForMe(true)}
                  />
                  La reserva es para mí
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="radio"
                    name="reservationFor"
                    value="other"
                    checked={!isForMe}
                    onChange={() => setIsForMe(false)}
                  />
                  La reserva es para otra persona
                </label>
              </div>

              <div className="modal-buttons">
                <button
                  type="submit"
                  className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                  disabled={loading} // Desactivar el botón mientras se realiza la solicitud
                >
                  {loading ? "Confirmando..." : "Confirmar"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationModal;

