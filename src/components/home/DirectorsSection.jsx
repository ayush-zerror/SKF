import React from "react";
import DirectorCard from "../common/castContainer/DirectorCard";
import DirectorsContainer from "../common/castContainer/DirectorsContainer";

const directors = [
  { id: 1, name: "Kabir khan", image: "/images/home/d1.png" },
  { id: 2, name: "Nitin Kakkar ", image: "/images/home/d2.png" },
  { id: 3, name: "Nikhil Advani", image: "/images/home/d3.png" },
  { id: 3, name: "Jean-François Pouliot", image: "/images/home/d4.png" },
  { id: 3, name: "Ali Abbas Zafar", image: "/images/home/d5.png" },
  { id: 3, name: "Mahesh Manjrekar", image: "/images/home/d6.png" },
];
const DirectorsSection = () => {
  return (
    <section id="directors_section">
      <h5 className="tag">Movies</h5>
      <h3 className="heading">
        Visionaries Be<span className="letter-u">h</span>ind the <br /> Ca
        <span className="letter-u">m</span>era
      </h3>
      <p className="description">
        SKF collaborates with some of <br /> the most creative directors in{" "}
        <br /> Indian cinema.
      </p>
      <DirectorsContainer data={directors} />
    </section>
  );
};

export default DirectorsSection;
