import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReservationDetails = () => {
  const { idReservation } = useParams(); // Obtener el ID de la reserva de la URL
  const [reservationData, setReservationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Llamada a la API para obtener los detalles de la reserva;
    const fetchReservationDetails = async () => {
      // console.log("reserva id", idReservation);
      try {
        const response = await axios.get(
          `https://c20-54-t-node-react.onrender.com/api/v1/reservation/${idReservation}`
        );
        setReservationData(response.data); // Guardamos los datos obtenidos
      } catch (err) {
        setError("Error al cargar los detalles de la reserva");
      } finally {
        setLoading(false);
      }
    };

    fetchReservationDetails();
  }, [idReservation]); // Cargar los datos cuando cambia el ID de la reserva

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
              <strong>DNI:</strong> {reservationData.idAt}
            </p>
            <p>
              <strong>Email:</strong> {reservationData.email}
            </p>
            <p>
              <strong>Fecha de Nacimiento:</strong> {reservationData.dateBirth}
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
