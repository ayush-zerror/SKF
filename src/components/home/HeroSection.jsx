import React, { useRef, useEffect } from "react";
import HeroLoader from "./HeroLoader";
import MovieCard from "../movieListing/MovieCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ movies }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useSplitTextMaskAnimation([titleRef]);

  // Cards fade in from right initially
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
  }, []);
  useGSAP(() => {
    if (!heroRef.current || cardsRef.current.length < 3) return;

    const card1 = cardsRef.current[0];
    const card2 = cardsRef.current[1];
    const card3 = cardsRef.current[2];

    const card2Rect = card2.getBoundingClientRect();
    const card1Rect = card1.getBoundingClientRect();
    const card3Rect = card3.getBoundingClientRect();

    const moveX1 = card2Rect.left - card1Rect.left;
    const moveX3 = card2Rect.right - card3Rect.right;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "bottom bottom",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });

    // Animate cards and spans together
    tl.to(
      [
        card1.querySelectorAll("span"),
        card2.querySelectorAll("span"),
        card3.querySelectorAll("span"),
      ],
      { opacity: 0, duration: 0.2, stagger: 0.1 },
      "s"
    )
      .to(card1, { x: moveX1, zIndex: 1 })
      .to(card2, { zIndex: 2 }, "<")
      .to(card3, { x: moveX3, zIndex: 3 }, "<");

    // ✅ Cleanup on unmount
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  useGSAP(() => {
    if (!heroRef.current) return;

    const upcomingTitle = document.querySelector("#Upcoming_title");
    const h2 = upcomingTitle.querySelector("h2");

    if (!upcomingTitle || !h2) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "bottom 90%", // when bottom of hero hits 90% of viewport
        end: "bottom 50%", // end scroll point
        scrub: true,
      },
    });

    tl.to(upcomingTitle, { y: 140, ease: "power3.out" }) // move the whole section down
      .to(h2, { fontSize: "6rem", ease: "power3.out" }, "<"); // increase h2 font size at the same time
  }, []);

  return (
    <div id="hero_section_container" ref={heroRef}>
      <HeroLoader />
      <section id="movie_carouse_sectionl">
        <div id="movie_carousel_content">
          <h5 className="tag">Movies</h5>
          <h3 ref={titleRef} className="heading">
            Explore our top <span className="letter-u">films</span> loved by{" "}
            <br /> <span className="letter-u">audiences</span> worldwide.
          </h3>
          <div id="movie_carousel" className="grid grid-cols-3 gap-4">
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                id={index + 1}
                data={movie}
                ref={(el) => (cardsRef.current[index] = el)}
              />
            ))}
          </div>
        </div>
        <div id="Upcoming_title">
          <h2 className="heading">Upcoming Release</h2>
          <p className="description">
            Soon hitting the screens: the latest blockbusters and fan-favorite
            stories that are set to wow audiences everywhere.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
