import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import Button from "../Button";
import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";

const MoviesListing = ({ isHero, data }) => {
  const filters = ["all", "released", "upcoming movies"];
  const [filter, setFilter] = useState("released");
  const titleRef = useRef(null);
  useSplitTextMaskAnimation([titleRef])

  return (
    <section id="movie_listing" className={`${isHero ? "hero" : ""}`}>
      <div className="movie_listing_header">
        <h5 className="tag">Movies</h5>
        <h3 ref={titleRef} className="heading">
          Explore our top fil<span className="letter-u">m</span>s loved by{" "}
          <br /> audien<span className="letter-u">c</span>es worldwi
          <span>d</span>e.
        </h3>

        {/* Filter Section */}
        <div className="filter_movie">
          {filters.map((f, idx) => (
            <span
              key={idx}
              onClick={() => setFilter(f)}
              className={`${f === filter ? "active" : ""} `}
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Movie Container */}
        <div id="movie_container" className={isHero ? "hero" : ""}>
          {data.map((movie, index) => (
            <MovieCard key={index} id={index + 1} data={movie} />
          ))}
        </div>
      {isHero && (
        <div className="movie_listing_btn">
          <Button color={"black"} title={"show more"} />
        </div>
      )}
    </section>
  );
};

export default MoviesListing;
