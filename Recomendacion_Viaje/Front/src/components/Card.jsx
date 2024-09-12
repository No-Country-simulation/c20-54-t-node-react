import Stars from "./Stars";
import { FaBus } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import React, { useEffect } from 'react';


const Card = () =>{

    return(
        
            <div className="w-1/2 h-max rounded overflow-hidden shadow-lg mt-0 ">
                <h1 className="text-3xl font-extrabold dark:text-black mb-4">Tour antiguo en autobús de dos pisos
                <br />Y crucero por el río Támesis </h1>
                <div className="pb-3">
                 <Stars/>
                </div>
                <figure className=" mb-2 w-full  relative"  >
                    <img src="https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="montanias" />
                    
                </figure>
                <div className="flex">
                    <figure className="w-50 ml-0 mb-1 mr-1" >
                        <img src="https://images.pexels.com/photos/2662875/pexels-photo-2662875.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </figure>
                    <figure className="w-50 ml-0 mb-1 mr-1">
                        <img src="https://media.istockphoto.com/id/1199804796/es/foto/retrato-de-mujer-tur%C3%ADstica-levant%C3%B3-las-manos-y-de-pie-casi-ventana-mirando-a-la-hermosa-vista.jpg?b=1&s=612x612&w=0&k=20&c=jEgfimwd8kyWyMC2SRMPsK0nJkOAFMkdmZF-U_2e1pk=" alt="" />
                    </figure>
                    <figure className="w-50 ml-0 mb-1 mr-1">
                        <img src="https://images.pexels.com/photos/12260757/pexels-photo-12260757.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </figure>
                    <figure className="w-50 ml-0 mb-1 mr-1">
                        <img src= "https://images.pexels.com/photos/18785919/pexels-photo-18785919/free-photo-of-londres-desde-the-shard.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </figure>

                </div>
                <article className="flex flex-wrap p-2">
                    
                    <div className="w-1/2 p-2 text-sm ">
                        <div className="flex items-center" >
                            <FaBus/>
                            <h1 className="font-bold ml-1">Transporte</h1>
                        </div>
                        <p>Opciones de transporte conveniente para tu viaje, incluyendo alquiler de coches y servicios de transporte público</p>
                    </div>
                    <div className="w-1/2 p-2 text-sm">
                        <div className="flex items-center">
                        <FaHotel/>
                            <h1 className="font-bold ml-1">Alojamiento</h1>
                        </div>    
                        <p>Encuentra el lugar perfecto para tu estancia, desde hoteles lujosos hasta alojamientos más económicos</p>
                    </div>
                    <div className="w-1/2 p-2 text-sm">
                        <div className="flex items-center">
                        <IoFastFood />
                            <h1 className="font-bold ml-1">Alimentacion</h1>
                        </div>                    
                        <p>Disfruta de una variedad de opciones gastronómicas, desde restaurantes locales hasta servicios de comida a la habitacion</p>
                    </div>
                    <div className="w-1/2 p-2 text-sm">
                        <div className="flex items-center">
                        <FaLocationDot/>
                            <h1 className="font-bold ml-1">Ubicacion</h1>
                        </div>
                        <p>La mejor ubicación. Los viajeros recientes le dan una puntuación alta </p>
                    </div>

                </article>
            </div>

    )
}

export default Card