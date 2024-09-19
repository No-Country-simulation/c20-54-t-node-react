import React, { useEffect, useState } from "react";
import { getUserById } from "../services/userServices";

const MyBookings = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user_id");
    getUserById(user)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return user == null ? (
    <div>Cargando ...</div>
  ) : (
    <section className="w-full h-screen px-8 py-4">
      <section className=" w-1/5 border-2 border-primary-color border-dashed rounded-lg p-4">
        <h2 className="font-bold font-title text-xl text-primary-color my-3">Mis Datos</h2>
        <div>
          <h4>Nombre:</h4>
          <p>
            {user.name.charAt(0).toUpperCase() + user.name.slice(1)}{" "}
            {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}
          </p>
        </div>
        <div>
          <h4>Correo:</h4>
          <p>{user.email}</p>
        </div>
      </section>
      <section className=" shadow-lg">

      </section>
    </section>
  );
};

export default MyBookings;
