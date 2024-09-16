import Layout from "../components/Layout/Layout"
import Card from "../components/Card"
import Form from "../components/Form"
import Coments from "../components/Coments"
import React, { useEffect, useState } from 'react';
import { getData } from "../utils";
import useGetPackage from "../services/useGetPackage";
import { useParams } from "react-router-dom";

function DetailsCard() {
  const { idCard } = useParams(); 
const {fetchData,data}=useGetPackage(idCard);
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);
  
    return (
      <>
        
          <div className="flex ml-80 flex flex-col md:flex-row md:space-x-4" >
            <Card data={data}/>
            <Form/>
          </div>
          <Coments packageId={data}/>
        
      </>
    )
  }
  
  export default DetailsCard
  