import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { getReservationById } from "../services/ReservationsServices";

const ReservationDetails = () => {
  const [reservationData, setReservationData] = useState(null);
  const { idReservation } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
            setReservationData(response.data);
          })
          .catch((e) => console.error(e));
      };

      fetchReservationDetails();
    }
  }, [idReservation]); // Cargar los datos cuando cambia el ID de la reserva

  return (
    <div className="w-full flex justify-center">
      <div className="mt-4 mb-20 w-1/2 shadow-lg rounded-xl p-8 border-t-2 border-l-2 border-primary-color">
        <h1 className="w-full my-4 rounded-xl font-bold text-xl text-primary-color">
          Detalles de la Reserva
        </h1>
        {reservationData ? (
          reservationData?.isGuest == true ? (
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
            </>
          ) : (
            <>
              <p>
                <strong>Nombre:</strong> {reservationData.userID.name}
              </p>
              <p>
                <strong>Apellido:</strong> {reservationData.userID.lastName}
              </p>

              <p>
                <strong>Email:</strong> {reservationData.userID.email}
              </p>
              <p>
                <strong>Destino:</strong>{" "}
                {reservationData.packages[0].packageID.title}
              </p>
              <p>
                <strong>Ciudad:</strong>{" "}
                {reservationData.packages[0].packageID.city}
              </p>
              <p>
                <strong>Salida:</strong>{" "}
                {format(
                  new Date(reservationData.packages[0].packageID.dateStart),
                  "d 'de' MMMM 'de' yyyy",
                  { locale: es }
                )}
              </p>
              <p>
                <strong>Regreso:</strong>{" "}
                {format(
                  new Date(reservationData.packages[0].packageID.dateEnd),
                  "d 'de' MMMM 'de' yyyy",
                  { locale: es }
                )}
              </p>

              {/* Otros detalles de la reserva */}
            </>
          )
        ) : (
          <p>Cargando...</p>
        )}
       <div className="mt-6 flex justify-center">
       <button
          onClick={() => navigate(`/`)}
          className="mx-2 bg-primary-color py-2 px-4 rounded-full text-secondary-color text-sm hover:bg-action-color"
        >
          Explorar más paquetes
        </button>
       </div>
      </div>
    </div>
  );
};

export default ReservationDetails;
