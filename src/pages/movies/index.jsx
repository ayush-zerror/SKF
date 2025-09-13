import MoviesListing from "@/components/movieListing/MoviesListing";
import { movies } from "@/helper/moviesData";
import React from "react";

const Movies = ({ movies }) => {
  return (
    <>
      <MoviesListing isHero={true} data={movies} />
    </>
  );
};

export default Movies;

export async function getStaticProps() {
  return {
    props: {
      movies,
    },
  };
}
