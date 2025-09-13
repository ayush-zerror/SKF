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
  const lineRef = useRef(null); // ref for this card's line

  useSplitTextMaskAnimation([paraRef, titleRef, descriptionRef]);

  useEffect(() => {
    if (!lineRef.current) return; // skip if last card (no line)

    const tl = gsap.fromTo(
      lineRef.current,
      { width: 0 },
      {
        width: "100%",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );

    // Refresh ScrollTrigger so positions are correct
    ScrollTrigger.refresh();

    // Clean up ScrollTrigger on unmount
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="highlight_card">
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
      <div className="highlight_img">
        <Image width={1000} height={1000} src={data?.image} alt={data?.title} />
      </div>
      {!isLast && <div ref={lineRef} className="highlight_line"></div>}
    </div>
  );
};

export default HighlightCard;
