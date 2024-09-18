import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import usePostPackage from '../services/usePostPackage';
import { useParams } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";




const CommentSection = ({packageId}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [valuePackage,setvaluePackage]= useState(packageId)
  const { idCard } = useParams(); 
  const handleRatingClick = (index) => {
    setRating(index + 1);
  };
  const {fetchData}=usePostPackage(idCard,setvaluePackage)
  useEffect(( )=>{
    setvaluePackage(packageId)
  },[packageId])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      fetchData(rating,comment)
      setComment('');
      setRating(0);
    }
  };
console.log(valuePackage)
  return (
    <div className="p-4 rounded-lg shadow-lg w-1/2 ml-60 mt-10 overflow-hidden ">
      <h2 className="text-xl font-bold mb-4 text-primary-color">Comentarios y Puntuación</h2>

      <div className="mb-4">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className={`text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => handleRatingClick(index)}
            >
              {index < rating ? <FaStar /> : <FaRegStar />}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          placeholder="Escribe tu comentario..."
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
        <button
          type="submit"
          className=" bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-md mt-4 h-10 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg " 
        >
          Comentar
        </button>
      </form>

      <div >
        {valuePackage?.package?.comments?.length === 0 ? (
          <p>No hay comentarios aún.</p>
        ) : (
          valuePackage?.package?.comments?.map((item, index) => (
            <div key={index} className="mb-4 p-2 border border-gray-200 rounded-md shadow-sm  ">
              <div className="flex justify-end ">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-xl ${starIndex < item?.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                  >
                    {starIndex < item?.rating ? <FaStar /> : <FaRegStar />}
                  </span>
                ))}
                  <span className='flex  w-32 h-6 rounded-lg shadow-lg justify-center mr-2 ml-6 '>
                        <div className="flex items-center p-2 " >
                            < IoPersonCircleOutline className='w-7 h-7'/>
                            <h1 className="font-bold ml-1 text-sm text-center content-center">Desconocido</h1>
                        </div>   
            
                  </span>
              </div>
              <p className="mt-2">{item?.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
