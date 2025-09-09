import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ data }) => {
  return (
    <Link href='/movies/1' className="movie_card">
      <div className="movie_img">
        <Image
          width={1000}
          height={1000}
          src={data?.image}
          alt={data?.title}
        />
      </div>
      <div className="movie_dets">
        <span>{data?.title}</span>
        <span>{data?.year}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
