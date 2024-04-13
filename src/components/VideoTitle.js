import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white p-4 px-12 text-xl text-black rounded-md hover:bg-opacity-80">
          ⏯️ Play
        </button>
        <button className="mx-2 bg-gray-500 p-4 px-12 text-xl text-white rounded-md bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
