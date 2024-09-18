import endpoints from "./endpoints";
import axios from "axios";

export const getUserById = async(idUser) =>{
    try {
        const { data } = await axios.get(endpoints.getUser(idUser))
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}