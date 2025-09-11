import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Button from "../Button";

const MoviesListing = ({ isHero, data }) => {
  const [filter, setFilter] = useState("released");
  const filters = ["all", "released", "upcoming movies"];

  return (
    <section id="movie_listing" className={`${isHero ? "hero" : ""}`}>
      <div className="movie_listing_header">
        <h5 className="tag">Movies</h5>
        <h3 className="heading">
          Explore our top fil<span className="letter-u">m</span>s loved by{" "}
          <br /> audien<span className="letter-l">c</span>es worldwi
          <span>d</span>e.
        </h3>

        {/* Filter Section */}
        <div className="filter_movie">
          {filters.map((f, idx) => (
            <span
              onClick={() => setFilter(f)}
              className={`${f === filter ? "active" : ""} `}
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Movie Container */}
      {!isHero && (
        <div id="movie_container">
          {data.map((movie, index) => (
            <MovieCard key={index} data={movie} />
          ))}
        </div>
      )}
      {isHero && (
        <div id="movie_container_ishero">
          {data
            .reduce((rows, item, index) => {
              if (index % 2 === 0) {
                rows.push([item]);
              } else {
                rows[rows.length - 1].push(item);
              }
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div key={rowIndex} className="movie_container_row">
                {row.map((movie, colIndex) => (
                  <MovieCard key={rowIndex + "-" + colIndex} data={movie} />
                ))}
              </div>
            ))}
        </div>
      )}

      {isHero && (
        <div className="movie_listing_btn">
          <Button color={"red"} title={"show more"} />
        </div>
      )}
    </section>
  );
};

export default MoviesListing;
