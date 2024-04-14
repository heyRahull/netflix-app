import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useGenre from "../hooks/useGenre";
import useGenreMovies from "../hooks/useGenreMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useGenre();
  useGenreMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <div></div>
    </div>
  );
};

export default Browse;
