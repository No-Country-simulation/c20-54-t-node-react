import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from "react-router-dom";
import NavBar from './NavBar/NavBar';

const Layout = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
