import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import Button from "../common/Button";
import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";

const MoviesListing = ({ data }) => {
  const filters = ["all", "released", "upcoming movies"];
  const [filter, setFilter] = useState("released");
  const titleRef = useRef(null);
  useSplitTextMaskAnimation([titleRef]);

  return (
    <section id="movie_listing" className="hero">
      <div className="movie_listing_header">
        <h5 className="tag">Movies</h5>
        <h3 ref={titleRef} className="heading">
          Explore our top <span className="letter-u">films</span> loved by{" "}
          <br /> <span className="letter-u">audiences</span> worldwide.
        </h3>
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
      <div id="movie_container" className="hero">
        {data.map((movie, index) => (
          <MovieCard key={index} id={index + 1} data={movie} />
        ))}
      </div>
      <div className="btn_container">
        <Button color={"black"} title={"show more"} />
      </div>
    </section>
  );
};

export default MoviesListing;
