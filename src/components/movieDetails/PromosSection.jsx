"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";

const promosData = [
  {
    id: 1,
    date: "3 May 2025",
    title:
      "SIKANDAR: Official Teaser | Salman Khan | Sajid Nadiadwala | A.R. Murugadoss | EID 2025",
    poster: "/images/moviedetails/trailer1.png",
  },
  {
    id: 2,
    date: "3 May 2025",
    title:
      "Salman Khan Has An ANNOUNCEMENT | Sikandar | Salman Khan, Rashmika Mandanna | Netflix India",
    poster: "/images/moviedetails/trailer2.png",
  },
];

const PromosSection = () => {
  const containerRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const img = containerRefs.current[index].querySelector(".hover_img");
    gsap.to(img, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseMove = (index, e) => {
    const card = containerRefs.current[index];
    const img = card.querySelector(".hover_img");

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - img.offsetWidth / 2;
    const y = e.clientY - rect.top - img.offsetHeight / 2;

    gsap.to(img, {
      // x,
      y,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index) => {
    const img = containerRefs.current[index].querySelector(".hover_img");
    gsap.to(img, {
      autoAlpha: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section id="promos_section">
      <div className="promos_container">
        <h5 className="tag">Promos</h5>
        <h2 className="heading">Trailers</h2>

        <div id="trailer_container">
          {promosData.map((promo, index) => (
            <div
              key={promo.id}
              className="trailer_card"
              ref={(el) => (containerRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseMove={(e) => handleMouseMove(index, e)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <p className="trailer_date">{promo.date}</p>
              <p className="trailer_title description">{promo.title}</p>

              {/* Floating image */}
              <Image
                src={promo.poster}
                alt={promo.title}
                width={400}
                height={300}
                className="hover_img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromosSection;
