"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MovieDetailsHero = () => {
  const bannerRef = useRef(null);
  const detailsRef = useRef(null);

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
      <div
        ref={bannerRef}
        className="movie_banner"
        style={{ transform: "translateY(-100%)", opacity: 0 }}
      >
        <Image
          width={1000}
          height={1000}
          src="/images/moviedetails/movie_banner.png"
          alt="image"
        />
        <div className="movie_banner_overlay">
          <h2 className="heading">sikandar</h2>
        </div>
      </div>

      <div
        ref={detailsRef}
        className="movie_details_info"
        style={{ transform: "translateY(100%)", opacity: 0 }}
      >
        <div>
          <p>Directed By</p>
          <h4>A.R. Murugadoss</h4>
        </div>
        <div>
          <p>Produced By</p>
          <h4>Salman Khan</h4>
        </div>
        <div>
          <p>Genre</p>
          <h4>Action/Thriller</h4>
        </div>
        <div>
          <p>Duration</p>
          <h4>2h 15m</h4>
        </div>
        <div>
          <p>Watch now</p>
          <Image
            width={1000}
            height={1000}
            src="/images/moviedetails/netflix.png"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHero;
