import React, { useEffect, useState } from "react";
import { getUserById } from "../services/userServices";
import { getReservation } from "../services/ReservationsServices";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { redirect, useNavigate } from "react-router-dom";

const MyBookings = () => {
  const [user, setUser] = useState(null);
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user_id");
    getUserById(user)
      .then((response) => {
        setUser(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getReservation(token)
      .then((response) => {
        setBooking(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return user == null ? (
    <div>Cargando ...</div>
  ) : (
    <section className="w-full px-8 py-4 flex flex-row justify-between">
      <section className=" w-1/5 h-1/5 shadow-2xl rounded-lg py-4 px-6">
        <h2 className="border-b-2 pb-2 font-bold font-title text-xl text-primary-color my-3">
          Mis Datos
        </h2>
        <div className="my-2">
          <h3 className="font-semibold">Nombre:</h3>
          <p className="italic">
            {user.name.charAt(0).toUpperCase() + user.name.slice(1)}{" "}
            {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}
          </p>
        </div>
        <div className="">
          <h3 className="font-semibold">Correo:</h3>
          <p className="italic">{user.email}</p>
        </div>
      </section>
      <section className="w-3/4 rounded-lg p-4 ">
        <h1 className="border-b-2 pb-2 font-bold font-title text-xl text-primary-color my-3">
          Mis Reservaciones
        </h1>
        {booking == null ? (
          <div className="mt-6 mb-64">
            <p className="my-4">En este momento no tienes reservaciones</p>
            <button
              onClick={() => navigate(`/`)}
              className="mx-2 bg-primary-color py-2 px-4 rounded-full text-secondary-color text-sm hover:bg-action-color"
            >
              Explorar paquetes
            </button>
          </div>
        ) : booking?.length > 0 ? (
          booking.map((item) => (
            <div
              key={item._id}
              className="my-4 border-l border-t border-primary-color rounded-xl shadow-xl p-4 "
            >
              <span className="flex text-center">
                {/* <h2 className="font-title font-semibold mr-2 ">Destino: </h2>
                <p>{item.packages[0].packageID.title}</p> */}
                <h2 className="mt-3 text-lg mb-2 font-title font-semibold mr-2 text-primary-color">
                  {item.packages[0].packageID.title}
                </h2>
              </span>
              <span className="flex text-center">
                <h2 className="font-title font-semibold mr-2 ">
                  Ciudad de destino:{" "}
                </h2>
                <p>{item.packages[0].packageID.city}</p>
              </span>
              <span className="flex text-center">
                <h2 className="font-title font-semibold mr-2 ">
                  Inicio del viaje:{" "}
                </h2>
                <p>
                  {" "}
                  {format(
                    new Date(item.packages[0].packageID.dateStart),
                    "d 'de' MMMM 'de' yyyy",
                    { locale: es }
                  )}
                </p>
              </span>
              <span className="flex text-center">
                <h2 className="font-title font-semibold mr-2 ">
                  Fecha de fin del viaje:
                </h2>
                <p>
                  {format(
                    new Date(item.packages[0].packageID.dateEnd),
                    "d 'de' MMMM 'de' yyyy",
                    { locale: es }
                  )}
                </p>
              </span>
              <span className="flex text-center">
                <h2 className="font-title font-semibold mr-2 ">Precio:</h2>
                <p>{item.packages[0].packageID.priceTotal} USD</p>
              </span>
              {item.isGuest == true ? (
                <div className="border-t pt-2 mt-1">
                  <span className="flex text-center">
                    <h2 className="font-title font-semibold mr-2 ">
                      Reservado a nombre de:{" "}
                    </h2>
                    <p> {item.name + item.lastName}</p>
                  </span>
                  <span className="flex text-center">
                    <h2 className="font-title font-semibold mr-2 ">Email: </h2>
                    <p>{item.email}</p>
                  </span>
                </div>
              ) : (
                <div>
                  <p className="italic ">Reservado para ti</p>
                </div>
              )}
              <h2
                className={`font-title font-semibold mr-2 text-end ${
                  item.status == "pending"
                    ? "text-[#ffc107]"
                    : item.status == "cancell"
                    ? "text-[#fc0505]"
                    : item.status == "comfirm"
                    ? "text-primary-color"
                    : null
                }`}
              >
                {item.status == "pending"
                  ? "Pago pendiente"
                  : item.status == "cancell"
                  ? "Cancelado"
                  : item.status == "comfirm"
                  ? "Comfirmado"
                  : null}
              </h2>
            </div>
          ))
        ) : (
          <div>Cargando...</div>
        )}
      </section>
    </section>
  );
};

export default MyBookings;
