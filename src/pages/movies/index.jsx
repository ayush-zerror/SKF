import MoviesListing from "@/components/common/movieListing/MoviesListing";
import React from "react";
const movies = [
  { image: "/images/home/movie1.png", title: "[1] Sikandar", year: "2025" },
  { image: "/images/home/movie2.png", title: "[2] Farrey", year: "2024" },
  {
    image: "/images/home/movie3.png",
    title: "[3] Kisi Ka Bhai Kisi Ki Jaan",
    year: "2023",
  },
  { image: "/images/home/movie1.png", title: "[1] Sikandar", year: "2025" },
  { image: "/images/home/movie2.png", title: "[2] Farrey", year: "2024" },
  {
    image: "/images/home/movie3.png",
    title: "[3] Kisi Ka Bhai Kisi Ki Jaan",
    year: "2023",
  },
  { image: "/images/home/movie1.png", title: "[1] Sikandar", year: "2025" },
  { image: "/images/home/movie2.png", title: "[2] Farrey", year: "2024" },
  {
    image: "/images/home/movie3.png",
    title: "[3] Kisi Ka Bhai Kisi Ki Jaan",
    year: "2023",
  },
  { image: "/images/home/movie1.png", title: "[1] Sikandar", year: "2025" },
];
const Movies = () => {
  return (
    <>
      <MoviesListing isHero={true}  data={movies}/>
    </>
  );
};

export default Movies;
