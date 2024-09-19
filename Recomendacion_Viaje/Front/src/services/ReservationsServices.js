import axios from "axios";

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
export const getReservation = async (reservationId) => {
  try {
    const response = await axios.get(
      `https://c20-54-t-node-react.onrender.com/api/v1/reservation${reservationId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
