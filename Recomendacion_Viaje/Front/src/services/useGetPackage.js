import { useState } from "react";
import { getData } from "../utils/utils";

const useGetPackage = (idCard = "") => {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    try {
      setLoader(true);
      const result = await getData(`package/${idCard}`);
      setData(result?.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
      console.log("No se pudo cargar los datos.");
      setLoader(false);
    }
  };
  return {
    fetchData,
    data,
    loader,
  };
};

export default useGetPackage;
