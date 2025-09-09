import AboutSection from '@/components/home/AboutSection'
import DirectorsSection from '@/components/home/DirectorsSection'
import Gallery from '@/components/common/Gallery'
import HeroSection from '@/components/home/HeroSection'
import Highlights from '@/components/home/Highlights'
import UpcomingSection from '@/components/home/UpcomingSection'
import React from 'react'
import MoviesListing from '@/components/common/movieListing/MoviesListing'
const movies = [
  { image: "/images/home/movie1.png", title: "[1] Sikandar", year: "2025" },
  { image: "/images/home/movie2.png", title: "[2] Farrey", year: "2024" },
  {
    image: "/images/home/movie3.png",
    title: "[3] Kisi Ka Bhai Kisi Ki Jaan",
    year: "2023",
  },
];
const Home = () => {
  return (
    <>
      <HeroSection />
      <UpcomingSection />
      <MoviesListing data={movies} />
      <DirectorsSection/>
      <Gallery />
      <Highlights/>
      <AboutSection/>
    </>
  )
}

export default Home