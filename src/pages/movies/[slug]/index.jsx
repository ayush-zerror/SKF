import Gallery from "@/components/common/Gallery";
import CastSection from "@/components/movieDetails/CastSection";
import MovieDetailsHero from "@/components/movieDetails/MovieDetailsHero";
import PromosSection from "@/components/movieDetails/PromosSection";
import SynopsisSection from "@/components/movieDetails/SynopsisSection";
import React from "react";

const MovieDetails = () => {
  return (
    <>
      <MovieDetailsHero />
      <SynopsisSection />
      <CastSection />
      <PromosSection />
      <Gallery />
    </>
  );
};

export default MovieDetails;
