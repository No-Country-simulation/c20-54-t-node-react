import React, { useEffect } from "react";
import banner from "../assets/banner1.jpg";
import filter1 from "../assets/packetFilter.jpg";
import filter2 from "../assets/hotelFilter.jpg";
import filter3 from "../assets/transportFilter.jpg";
import filter from "../assets/banner2.jpg";
import { getPackageByPrice } from "../services/PackageServices";

const Home = () => {
  const cards = [1, 2, 3, 4, 5, 6, 8, 9, 7];
  const categories = [
    { name: "Alojamiento", image: filter2 },
    { name: "Transporte", image: filter3 },
    { name: "Paquetes", image: filter1 },
  ];

  useEffect(() => {
    getPackageByPrice("220")
      .then((response) => {
        console.log("response", response);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="w-full">
      {/* banner */}
      <figure className="mt-4 relative h-80">
        <img className="w-full h-full object-cover" src={banner} alt="banner" />
        <figcaption className="absolute inset-0 flex flex-col justify-center items-center w-full h-full top-0">
          <h1 className="font-bold font-title text-secondary-color md:text-4xl text-xl">
            El viaje perfecto
          </h1>
          <p className="text-secondary-color mt-2">Para cualquier persona</p>
        </figcaption>
      </figure>
      {/* Filters section by category*/}
      <section className="flex w-full my-4 justify-center">
        <div className="flex w-2/3 ">
          {categories?.map((item, index) => (
            <div key={`item-${index}`} className="w-1/3 flex justify-center items-center">
              <figure
                className=" relative flex justify-center  text-xl hover:text-2xl "
              >
                <img
                  className="w-32 h-32 hover:w-36 hover:h-36 object-cover rounded-full  opacity-100"
                  src={item.image}
                  alt="banner"
                />
                <figcaption className="absolute top-1/2  text-action-color font-bold hover:text-xl">
                  {item.name}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>
      {/* sort filter */}
      <section className="flex w-full mb-4">
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="sort"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <select
            id="sort"
            className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Ordenar por:</option>
            <option value="lowPrice">Precio: menor a mayor</option>
            <option value="highPrice">Precio: mayor a menor</option>
            <option value="lowScore">Puntuación: menor a mayor</option>
            <option value="highScore">Puntuación: mayor a menor</option>
          </select>
        </form>
      </section>
      {/* cards section */}
      <section className="flex flex-wrap">
        {cards?.map((item, index) => (
          <div className="w-1/3 my-2 px-4">
            <figure key={item} className="flex justify-center relative">
              <img
                className="w-full object-cover rounded-xl"
                src={filter}
                alt="banner"
              />

              <figcaption className="absolute inset-0 rounded-xl flex flex-col justify-center items-center w-full h-1/4 bg-bg-info top-2/3">
                <div className="flex flex-row w-full p-2 border-primary-color">
                  <div className="w-1/3 px-1">
                    <h3 className="font-semibold  text-center">Ciudad</h3>
                    <p className="italic text-center">VISAKHAPATNAM</p>
                  </div>
                  <div className="w-1/3 px-1">
                    <h3 className="font-semibold text-center">Fechas</h3>
                    <p className="italic text-center">16 jun - 20 jun</p>
                  </div>
                  <div className="w-1/3 px-1">
                    <h3 className="font-semibold text-center">Precio</h3>
                    <p className="italic text-center">$500 USD</p>
                  </div>
                </div>
              </figcaption>
            </figure>
            <div className=" my-4 flex flex-col justify-center items-center">
              <h2 className="w-full font-bold text-lg">Title</h2>
              <button
                type="button"
                className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full "
              >
                Ver más información y reservar
              </button>
            </div>
          </div>
        ))}
      </section>
      {/* opinions section */}
      <section>
        <figure className="mt-4 relative h-80">
          <img
            className="w-full h-full object-cover"
            src={banner}
            alt="banner"
          />
          <figcaption className="absolute inset-0 flex flex-col justify-center items-center w-1/2 h-3/4 bg-bg-opinions top-10 left-10">
            <figure className="max-w-screen-md mx-auto text-center">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                  "Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                    Michael Gough
                  </cite>
                  <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                    Travel to canada
                  </cite>
                </div>
              </figcaption>
            </figure>
          </figcaption>
        </figure>
      </section>
    </section>
  );
};

export default Home;
