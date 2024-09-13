import React, { useEffect, useRef, useState } from "react";
import banner from "../assets/banner1.jpg";
import filter from "../assets/banner2.jpg";
import filter1 from "../assets/packetFilter.jpg";
import filter2 from "../assets/hotelFilter.jpg";
import filter3 from "../assets/transportFilter.jpg";
import { useNavigate } from "react-router-dom";

import { format } from "date-fns";
import {
  getPackageByCategoryAndPrice,
  getPackageByPrice,
} from "../services/PackageServices";

const Home = () => {
  const [packages, setPackages] = useState(null);
  const budgetRef = useRef(null);
  const [budget, setBudget] = useState(null);
  const [modalActive, setModalActive] = useState(true);
  const [filterActive, setFilterActive] = useState(0);
  const [sort, setSort] = useState(null);

  const navigate = useNavigate();

  const categories = [
    {
      name: "Todos",
      image:
        "https://res.cloudinary.com/dwvdzy8xq/image/upload/v1726242993/Proyecto%20Agencia/hiker-1607078_1280_i6uc30.jpg",
    },
    { name: "Alojamiento", image: filter2 },
    { name: "Transporte", image: filter3 },
    { name: "Paquetes", image: filter1 },
  ];

  useEffect(() => {
    console.log("budget", budget);
    if (budget != null) {
      switch (filterActive) {
        case 0:
          getPackageByPrice(budget)
            .then((response) => {
              console.log("response all", response);
              setPackages(response);
            })
            .catch((e) => console.log(e));
          break;
        case 1:
          getPackageByCategoryAndPrice("hosting", budget)
            .then((response) => {
              console.log("response hosting", response);
              setPackages(response);
            })
            .catch((e) => console.log(e));
          break;
        case 2:
          getPackageByCategoryAndPrice("transport", budget)
            .then((response) => {
              console.log("response transport", response);
              setPackages(response);
            })
            .catch((e) => console.log(e));
          break;
        case 3:
          getPackageByCategoryAndPrice("completed", budget)
            .then((response) => {
              console.log("response completed", response);
              setPackages(response);
            })
            .catch((e) => console.log(e));
          break;

        default:
          break;
      }
    }
  }, [budget, filterActive]);

  const getBudget = (e) => {
    e.preventDefault();
    const budget = budgetRef.current.value;
    if (budget > 0) {
      setBudget(budget);
      setModalActive(false);
    }
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    if (sort != null) {
      switch (sort) {
        case "lowPrice":
          break;
        case "highPrice":
          break;

        default:
          break;
      }
    }
  }, [packages, sort]);

  return (
    <div className="relative secondary-color">
      <section className="w-full">
        {/* banner */}
        <figure className="relative h-80">
          <img
            className="w-full h-full object-cover"
            src={banner}
            alt="banner"
          />
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
              <div
                key={`item-${index}`}
                className="w-1/4 flex justify-center items-center"
              >
                <button onClick={() => setFilterActive(index)}>
                  <figure
                    className={`relative  flex justify-center w-32 h-32 hover:scale-110 transition-transform duration-300  ${
                      filterActive == index
                        ? "border-2 border-primary-color rounded-full"
                        : ""
                    }`}
                  >
                    <img
                      className=" relative object-cover rounded-full"
                      src={item.image}
                      alt="banner"
                    />
                    <div className="absolute bg-modal rounded-full hover:opacity-60"></div>

                    <figcaption className="absolute top-1/2  text-secondary-color font-bold text-xl">
                      {item.name}
                    </figcaption>
                  </figure>
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* sort filter */}
        <section className="flex w-full mt-6 mb-4 justify-center">
          <div className="w-2/5 flex">
            <button
              onClick={() => setModalActive(true)}
              className="w-1/2 mx-4 bg-primary-color text-base text-secondary-color font-bold py-2 px-4 rounded-full hover:bg-action-color"
            >
              Cambiar el presupuesto
            </button>
            <form className="w-1/2 mx-4">
              <select
                id="sort"
                className="border border-primary-color text-base rounded-lg focus:ring-2 focus:border-primary-color focus:ring-primary-color active:ring-primary-color py-2 px-4"
                onChange={handleSort}
              >
                <option>Ordenar por:</option>
                <option value="lowPrice">Precio: menor a mayor</option>
                <option value="highPrice">Precio: mayor a menor</option>
                <option value="lowScore">Puntuación: menor a mayor</option>
                <option value="highScore">Puntuación: mayor a menor</option>
              </select>
            </form>
          </div>
        </section>
        {/* cards section */}
        <section className="flex flex-wrap mx-3">
          {packages?.data.packages == null ? (
            <p>Cargando...</p>
          ) : packages?.data.packages.length == 0 ? (
            <p>No hay paquetes</p>
          ) : (
            packages?.data.packages.map((item) => (
              <div key={item._id} className="w-1/3 my-2 px-4">
                <figure className="flex justify-center relative">
                  <img
                    className="w-full h-60 object-cover rounded-xl"
                    src={item.firstImage}
                    alt="banner"
                  />

                  <figcaption className="absolute inset-0 rounded-xl flex flex-col justify-center items-center w-full h-1/4 bg-bg-info top-2/3">
                    <div className="flex flex-row w-full p-2 border-primary-color">
                      <div className="w-1/3 px-1">
                        <h3 className="font-semibold  text-center">Ciudad</h3>
                        <p className="italic text-center">{item.city}</p>
                      </div>
                      <div className="w-1/3 px-1">
                        <h3 className="font-semibold text-center">Fechas</h3>
                        <p className="italic text-center">
                          {format(new Date(item.dateStart), "dd MMM")} -{" "}
                          {format(new Date(item.dateEnd), "dd MMM")}
                        </p>
                      </div>
                      <div className="w-1/3 px-1">
                        <h3 className="font-semibold text-center">Precio</h3>
                        <p className="italic text-center">${item.priceTotal}</p>
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className=" my-4 flex flex-col justify-center items-center">
                  <h2 className="w-full font-bold text-lg font-title">
                    {item.title}
                  </h2>
                  <p className="mt-1 w-full text-base line-clamp-2">
                    {item.description.content}
                  </p>
                  <button
                  onClick={()=>navigate(`/details/${item._id}`)}
                    type="button"
                    className="mt-3 flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full "
                  >
                    Ver más información y reservar
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
        {/* pagination */}
        <div className="w-full flex justify-center items-center">
          <nav>
            <ul className="flex items-center -space-x-px h-10 text-base">
              <li>
                <a className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-primary-color bg-secondary-color border border-e-0 border-primary-color rounded-s-lg hover:font-bold hover:text-secondary-color hover:bg-primary-color active:text-secondary-color active:bg-primary-color">
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              {packages
                ? [...Array(packages.totalPages)].map((item, index) => (
                    <li key={`pag-${index}`}>
                      <a className="flex items-center justify-center px-4 h-10 leading-tight text-primary-color bg-secondary-color border border-primary-color hover:font-bold hover:text-secondary-color hover:bg-primary-color active:text-secondary-color active:bg-primary-color">
                        1
                      </a>
                    </li>
                  ))
                : null}
              <li>
                <a className="flex items-center justify-center px-4 h-10 leading-tight text-primary-color bg-secondary-color border border-primary-color rounded-e-lg hover:font-bold hover:text-secondary-color hover:bg-primary-color active:text-secondary-color active:bg-primary-color ">
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
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
      {modalActive ? (
        <div className=" fixed top-0 right-0 flex justify-center items-center bg-modal w-screen h-screen">
          <form
            onSubmit={getBudget}
            className="flex flex-col justify-center items-center bg-secondary-color w-1/3 p-4 rounded-xl shadow-[0px_0px_35px_4px_rgba(34,129,206,1)]"
          >
            <label
              htmlFor="budget"
              className="my-2 font-bold text-primary-color font-title text-xl"
            >
              Ingrese el presupuesto para su viaje
            </label>
            <input
              id="budget"
              type="number"
              className="my-2 py-1 px-4 bg-secondary-color border border-action-color w-3/4 rounded-xl focus:outline-none focus:ring-2 focus:ring-action-color"
              ref={budgetRef}
              placeholder={budget}
            />
            <button
              type="submit"
              className="flex text-sm mt-3 mb-2 bg-action-color text-secondary-color font-bold py-2 px-4 rounded-full hover:bg-primary-color"
            >
              Explorar paquetes
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
