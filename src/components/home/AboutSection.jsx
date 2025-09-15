import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const bgRef = useRef(null);

  useGSAP(() => {
    if (!bgRef.current) return;

   gsap.fromTo(
  bgRef.current,
  { y: "-20%" }, // start position
  {
    y: "20%",    // end position
    ease: "none",
    scrollTrigger: {
      trigger: "#about_section",
      start: "top bottom",
      end: "bottom+=100 top",
      scrub: true,
    },
  }
);

  }, []);

  return (
    <section id="about_section">
      <Image
        width={1000}
        height={1000}
        src="/images/home/news1.png"
        alt="image"
        ref={bgRef}
      />
      {/* Overlay Content */}
      <div className="about_overlay">
        <Image
          width={1000}
          height={1000}
          src="/images/home/about_banner.jpg"
          alt="image"
        />
        <div className="about_overlay_inner">
          <Image
            width={1000}
            height={1000}
            src="/images/home/about_banner.jpg"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
