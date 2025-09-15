import AboutSection from '@/components/home/AboutSection'
import DirectorsSection from '@/components/home/DirectorsSection'
import Gallery from '@/components/common/Gallery'
import HeroSection from '@/components/home/HeroSection'
import Highlights from '@/components/home/Highlights'
import React from 'react'
import { movies } from '@/helper/moviesData'

const Home = ({ movies }) => {
  return (
    <>
      <HeroSection movies={movies} />
      <DirectorsSection />
      <Gallery />
      <Highlights />
      <AboutSection />
    </>
  )
}

export default Home;

export async function getStaticProps() {
  // Take only the last 3 movies
  const latestMovies = movies.slice(0, 3);
  return {
    props: {
      movies: latestMovies
    }
  };
}
