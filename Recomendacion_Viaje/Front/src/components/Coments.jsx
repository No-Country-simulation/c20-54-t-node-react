import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';



const CommentSection = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setCommentsList([...commentsList, { rating, comment }]);
      setComment('');
      setRating(0);
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-lg w-1/2 ml-80 mt-10 overflow-hidden ">
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
          className=" bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-md mt-4 h-10 " 
        >
          Comentar
        </button>
      </form>

      <div>
        {commentsList.length === 0 ? (
          <p>No hay comentarios aún.</p>
        ) : (
          commentsList.map((item, index) => (
            <div key={index} className="mb-4 p-2 border border-gray-200 rounded-md shadow-sm">
              <div className="flex">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-xl ${starIndex < item.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                  >
                    {starIndex < item.rating ? <FaStar /> : <FaRegStar />}
                  </span>
                ))}
              </div>
              <p className="mt-2">{item.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
