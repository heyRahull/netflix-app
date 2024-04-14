import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGenreMovies } from "../utils/moviesSlice";

const useGenreMovies = () => {
  const dispatch = useDispatch();
  const genreData = useSelector((store) => store.movies.genreData);
  console.log(genreData);
  useEffect(() => {
    if (genreData != null) {
      getGenreMovie();
    }
  }, [genreData]);

  const getGenreMovie = async () => {
    genreData?.map(async (genre) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        API_OPTIONS
      );
      const json = await data.json();
      console.log("rahul");
      dispatch(addGenreMovies(json.results));
    });
  };
};

export default useGenreMovies;
