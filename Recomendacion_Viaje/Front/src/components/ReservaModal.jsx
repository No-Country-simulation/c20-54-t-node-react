import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "../assets/css/modal.css"; // Estilos del modal

const ReservationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationFor, setReservationFor] = useState("");
  const [isForMe, setIsForMe] = useState(true); // Estado para saber si la reserva es para el usuario o para otra persona
  const [userData, setUserData] = useState({
    name: "Nombre Ejemplo",
    lastName: "Apellido Ejemplo",
    email: "ejemplo@email.com",
    dateBirth: "01/01/1990",
    dni: "12345678",
  });

  const navigate = useNavigate(); // Hook para redirigir

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
      // Redirigir a la página de detalles de la reserva si es para el usuario
      navigate("/reservation-details", { state: userData });
    } else {
      console.log("Reserva para otra persona:", reservationFor);
      // Redirigir al formulario de registro si la reserva es para otra persona
      navigate("/register");
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
