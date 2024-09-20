import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const Layout = () => {
  return (
    <div className="relative bg-secondary-color font-body">
      <NavBar />
      <Outlet />
      <Footer />
      
    </div>
  );
};

export default Layout;
