import React from "react";
import { POSTER_CDN_URL } from "../utils/constants";

const Moviecard = ({ data }) => {
  return (
    <div className="w-48 pr-4 hover:w-56">
      <img src={POSTER_CDN_URL + data.poster_path} alt="Movie backdrop" />
    </div>
  );
};

export default Moviecard;
