import React, { useRef } from "react";
import Button from "../common/Button";
import Image from "next/image";
import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";

const HighlightCard = ({ data }) => {
  const paraRef = useRef(null);
  const titleRef = useRef(null);

  useSplitTextMaskAnimation([paraRef, titleRef]);

  return (
    <div className="highlight_card">
      <div className="highlight_info">
        <div className="highlight_info_dets">
          <p ref={paraRef}>{data?.date}</p>
          <h4 ref={titleRef}>{data?.title}</h4>
          <span className="category">{data?.category}</span>
        </div>
        <Button title="Read More" color={"white"} />
      </div>
      <div className="highlight_img">
        <Image width={1000} height={1000} src={data?.image} alt={data?.title} />
      </div>
    </div>
  );
};

export default HighlightCard;
