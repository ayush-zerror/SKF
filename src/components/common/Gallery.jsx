import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div id="gallery">
      <div className="tag">gallery</div>
      <div className="gallery_container">
        {/* Top left - Dinner scene */}
        <div className="item item1">
          <Image
            src="/images/home/news1.png"
            alt="news1"
            layout="fill"
            objectFit="cover"
          />
          <span className="play-btn">▶</span>
        </div>

        {/* Salman behind-the-scenes */}
        <div className="item item2">
          <Image
            src="/images/home/news1.png"
            alt="news2"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Family festival scene */}
        <div className="item item3">
          <Image
            src="/images/home/news1.png"
            alt="news3"
            layout="fill"
            objectFit="cover"
          />
          <span className="play-btn">▶</span>
        </div>

        {/* Club scene */}
        <div className="item item4">
          <Image
            src="/images/home/news1.png"
            alt="news4"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Silhouette red background */}
        <div className="item item5">
          <Image
            src="/images/home/news1.png"
            alt="news5"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Salman in car */}
        <div className="item item6">
          <Image
            src="/images/home/news1.png"
            alt="news6"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Raw BTS text */}
        <div className="item item7">
          <Image
            src="/images/home/news1.png"
            alt="news7"
            layout="fill"
            objectFit="cover"
          />
          <div className="overlay-text">
            RAW, REAL, & BTS FROM SALMAN KHAN FILMS
          </div>
        </div>

        {/* Rashmika phone scene */}
        <div className="item item8">
          <Image
            src="/images/home/news1.png"
            alt="news8"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
