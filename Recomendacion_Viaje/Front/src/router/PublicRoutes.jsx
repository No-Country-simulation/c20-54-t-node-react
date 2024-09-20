import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoutes = ({ redirectPath = "/" }) => {
  const [isAuth, setIsAuth] = useState(false); 
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);

  if (isAuth && location.pathname === "/login" || location.pathname === "/register") {
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;    
};

export default PublicRoutes;
