import React, { useEffect, useRef } from "react";
import Button from "../common/Button";
import Image from "next/image";
import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HighlightCard = ({ data, isLast }) => {
  const paraRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const lineRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useSplitTextMaskAnimation([paraRef, titleRef, descriptionRef]);

  useEffect(() => {
    if (!cardRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current, // trigger on card
        start: "top 70%",         // adjust for when animation should start
        toggleActions: "play none none none",
      },
    });

    // Animate image scale
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 1, ease: "power3.out" }
      );
    }

    // Animate line width
    if (lineRef.current) {
      tl.fromTo(
        lineRef.current,
        { width: 0 },
        { width: "100%", duration: 1, ease: "power3.out" ,delay:.5},
        "<" // start at the same time as image animation
      );
    }

    return () => {
      tl.kill();
      tl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className="highlight_card" ref={cardRef}>
      <div className="highlight_info">
        <div className="highlight_info_dets">
          <p ref={paraRef}>{data?.date}</p>
          <h4 ref={titleRef}>{data?.title}</h4>
          <p ref={descriptionRef} className="description">
            {data?.description}
          </p>
        </div>
        <Button title="Read More" color={"white"} />
      </div>
      <div className="highlight_img" >
        <Image ref={imageRef} width={1000} height={1000} src={data?.image} alt={data?.title} />
      </div>
      {!isLast && <div ref={lineRef} className="highlight_line"></div>}
    </div>
  );
};

export default HighlightCard;
