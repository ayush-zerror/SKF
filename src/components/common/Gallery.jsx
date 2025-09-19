import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  useGSAP(() => {
    const galleryContainer = galleryRef.current;
    const cols = [...galleryContainer.querySelectorAll(".col")];

    const setupAnimations = () => {
      const heights = cols.map((col) => col.offsetHeight);
      const maxHeight = Math.max(...heights);

      cols.forEach((col) => {
        const diff = maxHeight - col.offsetHeight;
        console.log("col diff:", diff);

        gsap.to(col, {
          y: diff,
          ease: "none",
          scrollTrigger: {
            trigger: galleryContainer,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
          },
        });
      });

      ScrollTrigger.refresh(); // ✅ recalc after images are loaded
    };

    // ✅ Wait until all images load
    const images = galleryContainer.querySelectorAll("img");
    let loaded = 0;

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener("load", () => {
          loaded++;
          if (loaded === images.length) setupAnimations();
        });
      }
    });

    if (loaded === images.length) setupAnimations();
  }, []);

  // ✅ Array of images
  const images = [
    "/images/gallery/image1.png",
    "/images/gallery/image2.png",
    "/images/gallery/image3.png",
    "/images/gallery/image4.png",
    "/images/gallery/image5.png",
    "/images/gallery/image6.png",
    "/images/gallery/image7.png",
    "/images/gallery/image8.png",
    "/images/gallery/image9.png",
    "/images/gallery/image10.png",
    "/images/gallery/image11.png",
    "/images/gallery/image12.png",
    "/images/gallery/image13.png",
    "/images/gallery/image14.png",
  ];

  // ✅ Divide images into columns (5, 4, 5)
  const columns = [
    images.slice(0, 5),
    images.slice(5, 9),
    images.slice(9, 14),
  ];

  return (
    <section id="gallery" className="gallery">
      <h2 className="heading">
        Raw, real, & BTS from <br /> Salman Khan Films
      </h2>

      <div ref={galleryRef} className="gallery_container">
        {columns.map((colImages, colIndex) => (
          <div key={colIndex} className="col">
            {colImages.map((src, i) => (
              <Image
                key={i}
                width={500}
                height={500}
                src={src}
                alt={`gallery-${colIndex}-${i}`}
              />
            ))}
          </div>
        ))}
      </div>
       <div className="btn_container">
        <Button color={"black"} title={"show more"} />
      </div>
    </section>
  );
};

export default Gallery;
