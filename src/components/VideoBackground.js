import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerData = useSelector((store) => store.movies?.trailerData);
  useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="video_width aspect-video"
        src={`https://www.youtube.com/embed/${trailerData?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
