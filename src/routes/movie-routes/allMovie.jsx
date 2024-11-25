import React from "react";
import MovieCard from "../../components/movieCard";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  // getting datas with useing fetch
  // const response = await fetch('http:localhost:3000/movies')
  // const movies = await response.json()

  try {
    const response = await axios.get("http://localhost:3000/movies");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw new Error("Failed to fetch movies");
  }
}

export default function AllMovies() {
  const movies = useLoaderData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 gap-y-10 h-full w-full overflow-scroll p-5  pb-24  justify-items-center">
      {" "}
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}
