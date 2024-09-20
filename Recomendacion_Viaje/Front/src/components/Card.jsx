import Stars from "./Stars";
import React, { useEffect } from "react";
import Loader from "./Loader/Loader";

const Card = ({ data = {}, loader = false }) => {
  return (
    <div className="w-2/3 h-max rounded overflow-hidden shadow-lg mt-10 -ml-20  ">
      <h1 className="text-3xl font-extrabold dark:text-black mb-4">
        {data?.package?.title}{" "}
      </h1>
      <div className="pb-3">
        <Stars rating={data?.package?.rating} />
      </div>
      {loader ? (
        <div className="flex justify-center items-center h-96 bg-gray-800">
          <Loader />
        </div>
      ) : (
        <figure className=" mb-2 w-full h-96 object-cover relative mt-6">
          <img
            className="transition-transform duration-300 transform hover:scale-110 w-full h-full object-cover"
            src={data?.package?.firstImage}
            alt="montanias"
          />
        </figure>
      )}

      <article className="w-full h-26 rounded overflow-hidden shadow-lg mt-6 text-sm p-2 ">
        <div>
          <p>{data?.package?.description?.content}</p>
        </div>
      </article>
    </div>
  );
};

export default Card;
