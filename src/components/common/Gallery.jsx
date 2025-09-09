import Image from "next/image";
import React from "react";

const galleryData = [
  {
    id: 1,
    type: "video", // video or image
    src: "/images/home/hero.mp4",
    overlayText: null,
  },
  {
    id: 2,
    type: "image",
    src: "/images/gallery/g2.png",
    overlayText: "RAW, REAL, & BTS FROM SALMAN KHAN FILMS",
  },
  {
    id: 3,
    type: "video",
    src: "/images/home/hero.mp4",
    overlayText: null,
  },
  {
    id: 4,
    type: "image",
    src: "/images/gallery/g4.png",
    overlayText: "RAW, REAL, & BTS FROM SALMAN KHAN FILMS",
  },
  {
    id: 5,
    type: "image",
    src: "/images/gallery/g5.png",
    overlayText: "RAW, REAL, & BTS FROM SALMAN KHAN FILMS",
  },
  {
    id: 6,
    type: "image",
    src: "/images/gallery/g6.png",
    overlayText: "RAW, REAL, & BTS FROM SALMAN KHAN FILMS",
  },
  {
    id: 7,
    type: "image",
    src: "/images/gallery/g7.png",
    overlayText: "RAW, REAL, & BTS FROM SALMAN KHAN FILMS",
  },
  {
    id: 8,
    type: "image",
    src: "/images/gallery/g8.png",
    overlayText: "RAW, REAL, & BTS FROM SALMAN KHAN FILMS",
  },
];

const Gallery = () => {
  return (
    <div id="gallery">
      <div className="tag">gallery</div>
      <div className="gallery_container">
        {galleryData.map((item) => (
          <div key={item.id} className={`item item${item.id}`}>
            {item.type === "video" ? (
              <video autoPlay muted playsInline loop src={item.src}></video>
            ) : (
              <Image
                src={item.src}
                width={1000}
                height={1000}
                alt={`gallery-item-${item.id}`}
              />
            )}

            {item.type === "video" && <span className="play-btn">▶</span>}
            {item.overlayText && (
              <div className="overlay-text">{item.overlayText}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
