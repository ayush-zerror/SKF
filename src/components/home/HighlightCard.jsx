import React from "react";
import Button from "../common/Button";
import Image from "next/image";

const HighlightCard = ({ data }) => {
  return (
    <div className="highlight_card">
      <div className="highlight_info">
        <div className="highlight_info_dets">
          <p>{data?.date}</p>
          <h4>{data?.title}</h4>
          <span>{data?.category}</span>
        </div>
        <Button title="Read More" color={'white'} />
      </div>
      <div className="highlight_img">
        <Image width={1000} height={1000} src={data?.image} alt={data?.title} />
      </div>
    </div>
  );
};

export default HighlightCard;
