import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    if (!bgRef.current) return;

    const tl = gsap.fromTo(
      bgRef.current,
      { y: "-20%" },
      {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: "#about_section",
          start: "top bottom",
          end: "bottom+=100 top",
          scrub: true,
        },
      }
    );

    // Refresh ScrollTrigger after images in the section load
    const images = document.querySelectorAll("#about_section img");
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        ScrollTrigger.refresh(); // recalc positions
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => img.removeEventListener("load", handleImageLoad));
      tl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section id="about_section" className="relative overflow-hidden">
      <Image
        width={1000}
        height={1000}
        src="/images/home/news1.png"
        alt="image"
        className="object-cover w-full h-full absolute top-0 left-0"
        ref={bgRef}
      />
      {/* Overlay Content */}
      <div className="about_overlay relative z-10">
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
