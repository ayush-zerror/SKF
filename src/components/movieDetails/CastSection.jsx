import React from "react";
import Button from "../common/Button";
import DirectorsContainer from "../common/Directors/DirectorsContainer";

const directors = [
  { id: 1, name: "Salman khan", image: "/images/moviedetails/cast1.png" },
  { id: 2, name: "RASHMIKA MANDANA", image: "/images/moviedetails/cast2.png" },
  { id: 3, name: "KAJAL AGARWAL", image: "/images/moviedetails/cast3.png" },
  { id: 3, name: "Anjini Dhawan", image: "/images/moviedetails/cast4.png" },
  { id: 3, name: "Sathyaraj", image: "/images/moviedetails/cast5.png" },
  { id: 3, name: "Sharman Joshi", image: "/images/moviedetails/cast6.png" },
];
const CastSection = () => {
  return (
    <section id="cast_section">
      <h5 className="tag">Cast and crew</h5>
      <DirectorsContainer data={directors}/>
      <Button title={"show more"} color={"red"} />
    </section>
  );
};

export default CastSection;
