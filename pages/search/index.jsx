import { Header } from "@/shared/Components/Header";
import { Layout } from "@/shared/Components/Layout";
import { getMovies } from "@/shared/services/getMovie";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
// import { getMovies } from "@/shared/services/getMovie";

export default function SearchPage() {
  const{push}=useRouter()
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading,setLoading]=useState(false)

  async function handleInput(e) {
    let value = inputRef.current?.value;
    if (e.key === "Enter") {
      setInputValue(value);
      inputRef.current.value = "";

      try {
        let moviesData = await getMovies(inputValue);
        console.log(moviesData);
        setMovies(moviesData.Search);
        setLoading(true)
      


      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  }

  console.log(movies);
  console.log(inputValue);
  function getDetail(id) {
  push(`search/${id}/`)
}
  return (
    <div>
      <Header />
      <main>
 
        <Layout
          onClick={getDetail}
          onKeydown={handleInput}
          inputRef={inputRef}
          input
          loading={loading}
          quickMovies={movies}
        />
      </main>
    </div>
  );
}
