import React from "react";
import MovieCard from "./MovieCard";
import Button from "../Button";

const MoviesListing = ({ isHero, data }) => {
  return (
    <section id="movie_listing">
      <h5 className="tag">Movies</h5>
      <h3 className="heading">
        Explore our top fil<span className="letter-u">m</span>s loved by <br />{" "}
        audien<span className="letter-l">c</span>es worldwi<span>d</span>e.
      </h3>

      {/* Filter Section */}
      <div className="filter_movie">
        <span>All</span>
        <span className="active">Released</span>
        <span>Upcoming Movies</span>
      </div>

      {/* Movie Container */}
      <div id="movie_container" className={isHero ? "ishero" : ""}>
        {data.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))}
      </div>
      {isHero && (
        <div className="movie_listing_btn">
          <Button color={"red"} title={"show more"} />
        </div>
      )}
    </section>
  );
};

export default MoviesListing;
