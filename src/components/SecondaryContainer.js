import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const genreMovies = useSelector((store) => store.movies.genreMovies);
  const genreData = useSelector((store) => store.movies.genreData);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black ">
        <div className="-mt-96 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />

          {genreMovies.map((genreMovie, index) => (
            <MovieList
              key={index}
              title={genreData[index]?.name}
              movies={genreMovie}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
