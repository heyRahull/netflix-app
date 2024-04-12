import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  //fetching trailer video and updating the store
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailerData = json.results.filter((video) => video.type == "Trailer");
    const trailer = trailerData.length == 0 ? json.results[0] : trailerData[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
