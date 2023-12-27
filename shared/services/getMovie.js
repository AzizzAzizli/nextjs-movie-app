import { instanceAxios } from "../helper/instanceAxios";

export async function getQuickMovies() {
  try {
    const response = await instanceAxios({
      method: "GET",
      params: {
        s: "marvel",
        apikey:"31a22e85"
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function getMovies(movie) {
  try {
    const response = await instanceAxios({
      method: "GET",
      params: {
        apikey:"31a22e85",
        s:  movie ,
    
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function getMovieDetail(id) {
  try {
    const response = await instanceAxios({
      method: "GET",
      params: {
        apikey:"31a22e85",
        i:  id ,
    
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}