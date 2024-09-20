import { useNavigate } from "react-router-dom";
import { FaBus } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";

const Form = ({ data = {} }) => {
  const navigate = useNavigate();
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  useEffect(() => {
    const dateStartValue = data?.package?.dateStart;
    const dateEndValue = data?.package?.dateEnd;

    if (dateStartValue) {
      // Parsear la fecha y formatearla a YYYY-MM-DD
      const parsedDate = parseISO(dateStartValue);
      const formattedDate = format(parsedDate, "yyyy-MM-dd");
      setDateStart(formattedDate);
    } else {
      setDateStart(""); // o alguna fecha por defecto
    }
    if (dateEndValue) {
      // Parsear la fecha y formatearla a YYYY-MM-DD
      const parsedDate = parseISO(dateEndValue);
      const formattedDate = format(parsedDate, "yyyy-MM-dd");
      setDateEnd(formattedDate);
    } else {
      setDateEnd(""); // o alguna fecha por defecto
    }
  }, [data]);
  return (
    <>
      <form className="w-full max-w-sm rounded overflow-hidden shadow-lg ml-6 p-4 h-1/3 mt-10 relative  ">
        <h2 className="mb-4 ml-14 font-bold text-xl">Reserva</h2>
        <div className="md:w-1/3">
          <label className="w-full block text-left mb-2 ml-14">
            Fecha de Inicio
          </label>
        </div>
        <div className="md:flex md:items-center mb-6 items-center justify-center">
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="date-from"
              type="date"
              defaultValue={dateStart}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </div>
        <div className="md:w-1/3">
          <label className="w-full block text-left mb-2 ml-14">
            Fecha final
          </label>
        </div>
        <div className="md:flex md:items-center mb-6 items-center justify-center">
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="date-to"
              type="date"
              defaultValue={dateEnd}
            />
          </div>
        </div>
        <div className="md:w-1/3">
          <label className="block text-left mb-2 ml-14">Destino</label>
        </div>
        <div className="md:flex md:items-center mb-6 items-center justify-center">
          <div className="bg-primary-color bg-opacity-10 rounded-md w-40 text-center">
            <label htmlFor="">{data?.package?.city}</label>
          </div>
        </div>

        <div className="items-center justify-cente">
          <h2 className="text-center text-2xl text-primary-color font-bold">
            ${data?.package?.priceTotal}
          </h2>
        </div>

        <div className="ml-20">
          <div>
            <button
              onClick={() => navigate(`/booking`)}
              className=" bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-md m-4 mt-4 h-10 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg "
              type="buttton"
            >
              Confirmar Reserva
            </button>
          </div>
        </div>
        <div className="w-full p-2 text-xs ">
          <div className="flex items-center">
            <FaBus />
            <h1 className="font-bold ml-1">Transporte</h1>
          </div>
          <p>
            Opciones de transporte conveniente para tu viaje, incluyendo
            alquiler de coches y servicios de transporte público
          </p>
        </div>
        <div className="w-full p-2 text-xs">
          <div className="flex items-center">
            <FaHotel />
            <h1 className="font-bold ml-1">Alojamiento</h1>
          </div>
          <p>
            Encuentra el lugar perfecto para tu estancia, desde hoteles lujosos
            hasta alojamientos más económicos
          </p>
        </div>
        <div className="w-full p-2 text-xs">
          <div className="flex items-center">
            <IoFastFood />
            <h1 className="font-bold ml-1">Alimentacion</h1>
          </div>
          <p>
            Disfruta de una variedad de opciones gastronómicas, desde
            restaurantes locales hasta servicios de comida a la habitacion
          </p>
        </div>
        <div className="w-full p-2 text-xs">
          <div className="flex items-center">
            <FaLocationDot />
            <h1 className="font-bold ml-1">Ubicacion</h1>
          </div>
          <p>
            La mejor ubicación. Los viajeros recientes le dan una puntuación
            alta{" "}
          </p>
        </div>
      </form>
    </>
  );
};

export default Form;
