import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import LoginBooking from "../pages/LoginBooking";
import Booking from "../pages/Booking";
import RegisterBooking from "../pages/Register";
import DetailsCard from "../pages/DetailsCard";
import Home from "../pages/Home";
import ReservationDetails from "../components/ReservationDetails";
import MyBookings from "../pages/MyBookings";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoutes />}>
          <Route path="/booking" element={<Booking />} />
          <Route
            path="/reservation-details/:idReservation"
            element={<ReservationDetails />}
          />
          <Route path="/myBookings" element={<MyBookings />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route index path="/" element={<Home />} />
          <Route path="/register" element={<RegisterBooking />} />
          <Route path="/login" element={<LoginBooking />} />
          <Route
          path="/reservation-details/:idReservation"
          element={<ReservationDetails />}
         />
          <Route path="/details/:idCard" element={<DetailsCard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
