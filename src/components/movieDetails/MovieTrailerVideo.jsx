import React, { useEffect, useRef } from "react";

const MovieTrailerVideo = ({ showVideo, setShowVideo }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay with sound might be blocked:", err);
      });
    }
  }, [showVideo]);

  if (!showVideo) return null;

  return (
    <div id="movie_trailer_video">
      <button onClick={() => setShowVideo(false)}>✖</button>
      <video ref={videoRef} src="/images/home/loader.mp4" controls autoPlay>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MovieTrailerVideo;
