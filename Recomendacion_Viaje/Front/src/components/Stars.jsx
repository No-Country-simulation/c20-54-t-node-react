import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Stars = ({ rating }) => {
 
  const maxStars = 5;


  const stars = Array.from({ length: maxStars }, (_, index) => {
    
    if (4 >= index + 1) {
      return <FaStar key={index} className="text-yellow-500" />;
    }
    if (4 >= index + 0.5) {
      return <FaStarHalfAlt key={index} className="text-yellow-500" />;
    }
    return <FaRegStar key={index} className="text-gray-400" />;
  });

  return (
    <div className="flex">
      {stars}
    </div>
  );
};

export default Stars;
