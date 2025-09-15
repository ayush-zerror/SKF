import React from "react";
import PlaySvg from "./PlaySvg";
import Image from "next/image";

const MovieBanner = ({bannerRef,setShowVideo}) => {
  return (
    <div
      ref={bannerRef}
      className="movie_banner"
      style={{ transform: "translateY(-100%)", opacity: 0 }}
    >
      <Image
        width={1000}
        height={1000}
        src="/images/moviedetails/movie_banner.png"
        alt="image"
      />
      <div className="movie_banner_overlay">
        <h2 className="heading">sikandar</h2>
        <PlaySvg setShowVideo={setShowVideo} />
      </div>
    </div>
  );
};

export default MovieBanner;
