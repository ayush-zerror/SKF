import React, { useRef, useEffect } from "react";
import MovieCard from "../movieListing/MovieCard";
import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MovieCarousel = ({ data }) => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useSplitTextMaskAnimation([titleRef]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        }
      );
    });
  }, [data]);

  return (
    <section id="movie_carouse_section">
      <h5 className="tag">Movies</h5>
      <h3 ref={titleRef} className="heading">
        Explore our top fil<span className="letter-u">m</span>s loved by <br />{" "}
        audien<span className="letter-u">c</span>es worldwi
        <span>d</span>e.
      </h3>
      <div id="movie_carousel">
        {data.map((movie, index) => (
          <MovieCard
            key={index}
            id={index + 1}
            data={movie}
            ref={(el) => (cardsRef.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieCarousel;
