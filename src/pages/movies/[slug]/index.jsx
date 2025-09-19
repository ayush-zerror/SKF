import Gallery from "@/components/common/Gallery";
import CastSection from "@/components/movieDetails/CastSection";
import MovieDetailsHero from "@/components/movieDetails/MovieDetailsHero";
import SynopsisSection from "@/components/movieDetails/SynopsisSection";
import TrailerSection from "@/components/movieDetails/TrailerSection";
import React from "react";

const MovieDetails = () => {
  return (
    <>
      <MovieDetailsHero />
      <SynopsisSection />
      <CastSection />
      <TrailerSection/>
      <Gallery />
    </>
  );
};

export default MovieDetails;
