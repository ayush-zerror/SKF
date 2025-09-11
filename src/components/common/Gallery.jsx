import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const galleryData = [
  { id: 1, type: "video", src: "/images/home/hero.mp4", overlayText: null },
  { id: 2, type: "image", src: "/images/gallery/g2.png", overlayText: null },
  { id: 3, type: "video", src: "/images/home/hero.mp4", overlayText: null },
  { id: 4, type: "image", src: "/images/gallery/g4.png", overlayText: null },
  { id: 5, type: "image", src: "/images/gallery/g5.png", overlayText: null },
  { id: 6, type: "image", src: "/images/gallery/g6.png", overlayText: null },
  { id: 7, type: "image", src: "/images/gallery/g7.png", overlayText: "RAW, REAL, & BTS FROM SALMAN KHAN FILMS" },
  { id: 8, type: "image", src: "/images/gallery/g8.png", overlayText: null },
];

const Gallery = () => {
  const videoRefs = useRef({});
  const [playing, setPlaying] = useState({});

  const handleTogglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.muted = false; // enable audio when playing
      video.play();
      setPlaying((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setPlaying((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <div id="gallery">
      <div className="tag">gallery</div>
      <div className="gallery_container">
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
              <div className="overlay-text"><p>{item.overlayText}</p></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
