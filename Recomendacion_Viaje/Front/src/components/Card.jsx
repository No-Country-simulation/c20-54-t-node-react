import Stars from "./Stars";
import { FaBus } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import React, { useEffect } from 'react';


const Card = ({data={}}) =>{
console.log(data)
    return(
        
            <div className="w-1/2 h-max rounded overflow-hidden shadow-lg mt-0 ">
                <h1 className="text-3xl font-extrabold dark:text-black mb-4">{data?.package?.title} </h1>
                <div className="pb-3">
                 <Stars rating={data?.package?.rating}/>
                </div>
                <figure className=" mb-2 w-full  relative"  >
                    <img src={data?.package?.firstImage} alt="montanias" />
                    
                </figure>
                <div className="flex">
                   
                   {
                    data?.package?.image.map(data=>{
                        return(  
                        <figure className="w-50 ml-0 mb-1 mr-1" >
                            <img src={data} alt="" />
                        </figure>)
                    })
                   }

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