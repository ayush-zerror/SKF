import Image from "next/image";
import React from "react";

const DirectorCard = ({ data }) => {
  return (
    <div className="director_card">
      <span>{data?.name}</span>
      <Image width={1000} height={1000} src={data?.image} alt={data?.name} />
    </div>
  );
};

export default DirectorCard;
