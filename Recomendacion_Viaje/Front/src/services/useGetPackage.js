import React, { useState } from 'react'
import { getData } from '../utils/utils';

const useGetPackage = (idCard='') => {
    const [data, setData] = useState({});

    const fetchData = async () => {
        try {
          const result = await getData(`package/${idCard}` );
          setData(result?.data);
        } catch (error) {
          console.log(error)
          console.log('No se pudo cargar los datos.');
        }
      };
      return{
        fetchData,data
      }
}

export default useGetPackage