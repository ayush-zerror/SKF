import React, { useRef, useEffect } from "react";
import HeroLoader from "./HeroLoader";
import MovieCard from "../movieListing/MovieCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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
        { x: 1500, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
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

    const carouselContent = document.getElementById("movie_carousel_content");
    const upcomingTitle = document.getElementById("Upcoming_title");
    const parentSection = document.getElementById("movie_carousel_section");
    const upcomingPoster = document.getElementById("upcoming_poster");

    // dynamic distances
    const distanceToTop =
      upcomingTitle.getBoundingClientRect().top -
      parentSection.getBoundingClientRect().top;

    const posterDistanceToTop =
      upcomingPoster.getBoundingClientRect().top -
      parentSection.getBoundingClientRect().top;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "bottom bottom",
        end: "bottom top",
        pin: true,
        scrub: 0.8, // smoother scroll
      },
    });

    // Cards fade & slide
    tl.to(
      [
        card1.querySelectorAll("span"),
        card2.querySelectorAll("span"),
        card3.querySelectorAll("span"),
      ],
      {
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        force3D: true,
      },
      "cards"
    )
      .to(card1, { x: moveX1, zIndex: 1, force3D: true, duration: 1.2 })
      .to(card2, { zIndex: 2, force3D: true, duration: 1.2 }, "<")
      .to(card3, { x: moveX3, zIndex: 3, force3D: true, duration: 1.2 }, "<")

      // Move carousel content up smoothly
      .to(
        carouselContent,
        {
          y: "-100%",
          opacity: 0,
          duration: 1.4,
          ease: "power3.inOut",
          force3D: true,
        },
        "upcoming"
      )

      // Move Upcoming_title to top dynamically
      .to(
        upcomingTitle,
        {
          y: `-${distanceToTop}px`,
          paddingTop: "3.5rem",
          duration: 2,
          ease: "power2.out", // slightly gentler easing
          force3D: true,
        },
        "upcoming+=0.5"
      )

      // Scale h2 simultaneously
      .to(
        upcomingTitle.querySelector("h2"),
        {
          fontSize: "5rem",
          duration: 2,
          ease: "power2.out",
          force3D: true,
        },
        "upcoming+=0.5"
      )

      // Move upcoming poster dynamically
      .to(
        upcomingPoster,
        {
          y: `-${posterDistanceToTop}px`,
          duration: 2,
          ease: "power2.out",
          force3D: true,
        },
        "upcoming+=0.5"
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div id="hero_section_container" ref={heroRef}>
      <HeroLoader />
      <section id="movie_carousel_section">
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
        <div id="upcoming_poster">
          <Image width={1000} height={1000} src="/images/home/upcoming.png" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
