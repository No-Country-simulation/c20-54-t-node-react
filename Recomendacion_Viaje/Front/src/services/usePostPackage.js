import React, { useState } from "react";
import { getData, postData } from "../utils/utils";

const usePostPackage = (idCard = "", setvaluePackage, valuePackage) => {
  const fetchData = async (rating, comment) => {
    try {
      console.log(rating, comment);
      const result = await postData(`package/${idCard}/comment`, {
        rating,
        comment,
      });
      setvaluePackage([result?.data, ...valuePackage]);
    } catch (error) {
      console.log(error);
      console.log("No se pudo cargar los datos.");
    }
  };
  return {
    fetchData,
  };
};

export default usePostPackage;
