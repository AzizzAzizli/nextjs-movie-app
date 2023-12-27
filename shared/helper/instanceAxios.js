import axios from "axios";


export const instanceAxios = axios.create({
    baseURL:"http://www.omdbapi.com/",
})
