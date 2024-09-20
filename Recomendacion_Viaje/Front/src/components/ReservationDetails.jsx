import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getReservationById } from "../services/ReservationsServices";
const ReservationDetails = () => {
  const [reservationData, setReservationData] = useState(null);
  const { idReservation } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (idReservation != null) {
      // Llamada a la API para obtener los detalles de la reserva;
      const fetchReservationDetails = async () => {
        const token = localStorage.getItem("token");
        const data = {
          token: token,
          id: idReservation,
        };

        getReservationById(data)
          .then((response) => {
            console.log("response", response.data);
            setReservationData(response);
          })
          .catch((e) => console.error(e));

        // try {
        //   const response = await axios.get(
        //     `https://c20-54-t-node-react.onrender.com/api/v1/reservation/(id)`
        //   );
        //   setReservationData(response.data.id); // Guardamos los datos obtenidos
        // } catch (err) {
        //   setError("Error al cargar los detalles de la reserva");
        // } finally {
        //   setLoading(false);
        // }
      };

      fetchReservationDetails();
    }
  }, [idReservation]); // Cargar los datos cuando cambia el ID de la reserva

  // if (loading) {
  //   return <p>Cargando...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    <div className="modal-overlay">
      <div className="modal-content bg-bg-info">
        <h1>Detalles de la Reserva</h1>
        {reservationData ? (
          <>
            <p>
              <strong>Nombre:</strong> {reservationData.name}
            </p>
            <p>
              <strong>Apellido:</strong> {reservationData.lastName}
            </p>

            <p>
              <strong>Email:</strong> {reservationData.email}
            </p>

            {/* Otros detalles de la reserva */}
          </>
        ) : (
          <p>No se encontraron detalles para esta reserva</p>
        )}
      </div>
    </div>
  );
};

export default ReservationDetails;

