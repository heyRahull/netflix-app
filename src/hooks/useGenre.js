import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGenreData } from "../utils/moviesSlice";

const useGenre = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getGenreData();
  }, []);

  const getGenreData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addGenreData(json.genres));
  };
};

export default useGenre;
