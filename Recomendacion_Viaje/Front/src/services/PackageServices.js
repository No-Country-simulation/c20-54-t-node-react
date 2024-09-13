import endpoints from "./endpoints";
import axios from "axios";

export const getPackageByPrice = async(price) =>{
    try {
        const { data } = await axios.get(endpoints.getPackages,{
            params:{
                price:price
            }
        });
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}