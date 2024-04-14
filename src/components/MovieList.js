import React from "react";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-4xl font-semibold py-6 text-white">{title}</h1>
      <div className="flex overflow-x-auto list_container">
        <div className="flex">
          {movies?.map((movie) => (
            <Moviecard data={movie} key={movie.id} />
          ))}
          {/* <Moviecard data={movies[0]} /> */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
