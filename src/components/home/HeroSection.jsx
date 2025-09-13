import React from "react";
import HeroLoader from "./HeroLoader";
import MoviesListing from "../common/movieListing/MoviesListing";
import MovieCarousel from "./MovieCarousel";

const HeroSection = ({movies}) => {
  return (
    <div id="hero_section_container">
      <HeroLoader />
      <MovieCarousel data={movies} />
    </div>
  );
};

export default HeroSection;
