import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const Layout = () => {
  // const [modalActive, setModalActive] = useState(true);
  const [budget , setBudget] = useState(0);

  // useEffect(()=>{
  //   localStorage.setItem("budget",0)
  // },[])

  // const getBudget = (e) =>{
  //   e.preventDefault();
  //   if (budget>0){
  //     localStorage.setItem('budget', budget)
  //     setModalActive(false)
  //   }
  // }
  // const handleBudgetChange = (e) => {
  //   setBudget(e.target.value);
  // };
  
  return (
    <div className="relative bg-secondary-color font-body">
      <NavBar />
      <Outlet />
      <Footer />
      
    </div>
  );
};

export default Layout;
