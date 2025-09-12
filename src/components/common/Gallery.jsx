"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
  { id: 1, type: "video", src: "/images/home/hero.mp4", overlayText: null },
  { id: 2, type: "image", src: "/images/gallery/g2.png", overlayText: null },
  { id: 3, type: "video", src: "/images/home/hero.mp4", overlayText: null },
  { id: 4, type: "image", src: "/images/gallery/g4.png", overlayText: null },
  { id: 5, type: "image", src: "/images/gallery/g5.png", overlayText: null },
  { id: 6, type: "image", src: "/images/gallery/g6.png", overlayText: null },
  {
    id: 7,
    type: "image",
    src: "/images/gallery/g7.png",
    overlayText: "RAW, REAL, & BTS FROM SALMAN KHAN FILMS",
  },
  { id: 8, type: "image", src: "/images/gallery/g8.png", overlayText: null },
];

const Gallery = () => {
  const videoRefs = useRef({});
  const containerRef = useRef(null);
  const [playing, setPlaying] = useState({});

  const handleTogglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.play();
      setPlaying((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setPlaying((prev) => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".item");
    const triggers = [];

    items.forEach((item) => {
      gsap.set(item, { y: 100, opacity: 0 });

      const tween = gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      triggers.push(tween.scrollTrigger);
    });

    // ✅ Refresh ScrollTrigger after layout stabilizes
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    // ✅ cleanup
    return () => {
      clearTimeout(timeout);
      triggers.forEach((t) => t.kill());
      ScrollTrigger.refresh(); // ensure recalculated when unmounted
    };
  }, []);

  return (
    <div id="gallery">
      <div className="tag">gallery</div>
      <div className="gallery_container" ref={containerRef}>
        {galleryData.map((item) => (
          <div key={item.id} className={`item item${item.id}`}>
            {item.type === "video" ? (
              <video
                ref={(el) => (videoRefs.current[item.id] = el)}
                playsInline
                loop
                src={item.src}
              />
            ) : (
              <Image
                src={item.src}
                width={1000}
                height={1000}
                alt={`gallery-item-${item.id}`}
              />
            )}

            {item.type === "video" && (
              <button
                className="play-btn"
                onClick={() => handleTogglePlay(item.id)}
              >
                {playing[item.id] ? <FaPause /> : <FaPlay />}
              </button>
            )}

            {item.overlayText && (
              <div className="overlay-text">
                <p>{item.overlayText}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
