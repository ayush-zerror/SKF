import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MovieBanner from "./MovieBanner";
import MovieInfo from "./MovieInfo";
import MovieTrailerVideo from "./MovieTrailerVideo";

const MovieDetailsHero = () => {
  const bannerRef = useRef(null);
  const detailsRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);


  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Banner drops in
    tl.to(bannerRef.current, {
      y: "0%",
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      overwrite: "auto",
    })
      // Details rise up
      .to(
        detailsRef.current,
        {
          y: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          overwrite: "auto",
        },
        "-=1.0" // overlap
      );
  }, []);

  return (
    <div id="movie_details_hero">
      <MovieBanner bannerRef={bannerRef} setShowVideo={setShowVideo}/>
      <MovieInfo detailsRef={detailsRef} />
      <MovieTrailerVideo showVideo={showVideo} setShowVideo={setShowVideo}/>
    </div>
  );
};

export default MovieDetailsHero;
