import MoviesListing from "@/components/common/movieListing/MoviesListing";
import React from "react";
const movies = [
  { image: "/images/movie/movie1.png", title: "[1] Sikandar", year: "2025" },
  { image: "/images/movie/movie2.png", title: "[2] Farrey", year: "2024" },
  { image: "/images/movie/movie3.png", title: "[3] Chillar Party", year: "2011" },
  { image: "/images/movie/movie4.png", title: "[4] dr.cabbie", year: "2014" },
  { image: "/images/movie/movie5.png", title: "[5] Bajrangi Bhaijaan", year: "2015" },
  { image: "/images/movie/movie6.png", title: "[6] Hero", year: "2015" },
  { image: "/images/movie/movie7.png", title: "[7] Tubelight", year: "2017" },
  { image: "/images/movie/movie8.png", title: "[8] race 3", year: "2018" },
  { image: "/images/movie/movie9.png", title: "[9] loveyatri", year: "2025" },
  { image: "/images/movie/movie10.png", title: "[10] Farrey", year: "2024" },
];
const Movies = () => {
  return (
    <>
      <MoviesListing isHero={true}  data={movies}/>
    </>
  );
};

export default Movies;
