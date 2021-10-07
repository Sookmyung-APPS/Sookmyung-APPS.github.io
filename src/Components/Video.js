import React from "react";
import "../Assets/videoStyle.css";

function Video() {
  return (
    <div class="boxWarp" style={{ display: "flex", height: "100%" }}>
      <iframe
        class="box"
        src="https://www.youtube.com/embed/Jl2d7gqCbN4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
