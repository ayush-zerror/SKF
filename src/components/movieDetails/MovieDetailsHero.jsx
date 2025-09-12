import Image from "next/image";
import React from "react";

const MovieDetailsHero = () => {
  return (
    <div id="movie_details_hero">
      <div className="movie_banner">
        <Image
          width={1000}
          height={1000}
          src="/images/moviedetails/movie_banner.png"
          alt="image"
        />
        <div className="movie_banner_overlay">
          <h2 className="heading">sikandar</h2>
        </div>
      </div>
      <div className="movie_details_info">
        <div>
          <p>Directed By</p>
          <h4>A.R. Murugadoss</h4>
        </div>
        <div>
          <p>Produced By</p>
          <h4>Salman Khan</h4>
        </div>
        <div>
          <p>genre</p>
          <h4>Action/Thriller</h4>
        </div>
        <div>
          <p>Duration</p>
          <h4>2h 15m</h4>
        </div>
        <div>
          <p>Watch now</p>
          <Image
            width={1000}
            height={1000}
            src="/images/moviedetails/netflix.png"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHero;
