
import axios from "axios";
import endpoints from "./endpoints";

export const makeReservation = async (reservation) => {
  const config = {
    headers: { Authorization: `Bearer ${reservation.token}` },
  };
  try {
    const response = await axios.post(
      `https://c20-54-t-node-react.onrender.com/api/v1/reservation`,
      reservation.data,
      config
    );
    console.log("object",response)
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

//traer reservación por id
export const getReservationById = async (reservation) => {
  const config = {
    headers: { Authorization: `Bearer ${reservation.token}` },
  };
  try {
    const response = await axios.get(
      `https://c20-54-t-node-react.onrender.com/api/v1/reservation/${reservation.id}`,config
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getReservation = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    const {data} = await axios.get(endpoints.getBooking,config);
    return data;
  } catch (err) {
    console.error(err);
  }
};
