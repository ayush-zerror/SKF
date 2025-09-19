import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";

const TrailerSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const trailers = [
    "/images/movieDetails/trailer1.png",
    "/images/movieDetails/trailer2.png",
    "/images/movieDetails/trailer3.png",
  ];

  return (
    <>
      <div id="trailer_swiper_container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {trailers.map((src, i) => (
            <SwiperSlide key={i}>
              <Image width={1000} height={1000} src={src} alt={`trailer-${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div id="trailer_swiper_indicator">
        {trailers.map((src, i) => (
          <div
            key={i}
            className={`indicator_card ${activeIndex === i ? "active" : ""}`}
            onClick={() => swiperRef.current?.slideTo(i)}
          >
            <Image width={1000} height={1000} src={src} alt={`indicator-${i}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TrailerSwiper;
