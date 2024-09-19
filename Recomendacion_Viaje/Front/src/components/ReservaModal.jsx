import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "../assets/css/modal.css"; // Estilos del modal
import { makeReservation } from "../services/ReservationsServices";

const ReservationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationFor, setReservationFor] = useState("");
  const [reservationId, setReservationID] = useState(null);
  const [isForMe, setIsForMe] = useState(true); // Estado para saber si la reserva es para el usuario o para otra persona
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    idAt: "",
    email: "",
    dateBirth: "",
  });

  const navigate = useNavigate(); // Hook para redirigir
  const packageId = "66e24b70879b6a6141505431"; //cambiarlo por el dato real
  const token = localStorage.getItem("token");

  // Abrir el modal automáticamente cuando el componente se monte
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isForMe) {
      console.log("Reserva para mí");
      // Lógica si la reserva es para el usuario
      // const reservationDetails = {
      //   name: "John", // Aquí puedes obtener el nombre real del usuario
      //   lastName: "Doe",
      //   idAt: "12345678",
      //   email: "john.doe@example.com",
      //   dateBirth: "01/01/1990",

      //   // Otros detalles de la reserva
      // };
      const reservationDetails = {
        token: token,
        data: {
          isGuest: false,
          packageID: packageId,
        },
      };
      makeReservation(reservationDetails)
        .then((response) => {
          console.log("response", response);
          // navigate(`/reservation-details/${response.data._id}`);
        })
        .catch((e) => console.log(e));

      console.log("reservacion", reservationDetails);
      // Redirigir a la página de detalles de la reserva si es para el usuario
    } else {
      console.log("Reserva para otra persona:", reservationFor);
      //cierra el modal
      closeModal();

      // Redirigir al formulario si la reserva es para otra persona
    }
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>¿Para quién es la reserva?</h2>

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
                >
                  Confirmar
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
