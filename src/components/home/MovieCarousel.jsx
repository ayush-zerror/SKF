import React, { useRef } from "react";
import MovieCard from "../common/movieListing/MovieCard";
import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";

const MovieCarousel = ({ data }) => {
  const titleRef = useRef(null);
  useSplitTextMaskAnimation([titleRef]);

  return (
    <section id="movie_carouse_section">
      <h5 className="tag">Movies</h5>
      <h3 ref={titleRef} className="heading">
        Explore our top fil<span className="letter-u">m</span>s loved by <br />{" "}
        audien<span className="letter-u">c</span>es worldwi
        <span>d</span>e.
      </h3>
      {/* Movie Container */}
      <div id="movie_carousel">
        {data.map((movie, index) => (
          <MovieCard key={index} id={index + 1} data={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieCarousel;
