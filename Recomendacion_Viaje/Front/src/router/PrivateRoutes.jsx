import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ redirectPath = "/login" }) => {
  const token = localStorage.getItem("token");

  if (token == null) return <Navigate to={redirectPath} />;
  else  return <Outlet />;
};

export default PrivateRoutes;
