import Layout from "../components/Layout/Layout"
import Card from "../components/Card"
import Form from "../components/Form"
import Coments from "../components/Coments"
import React, { useEffect } from 'react';

function DetailsCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    return (
      <>
        
          <div className="flex ml-80 flex flex-col md:flex-row md:space-x-4" >
            <Card/>
            <Form/>
          </div>
          <Coments/>
        
      </>
    )
  }
  
  export default DetailsCard
  