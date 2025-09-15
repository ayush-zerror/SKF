import React, { useRef } from "react";
import DirectorsContainer from "../common/Directors/DirectorsContainer";
import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";

const directors = [
  { id: 1, name: "Kabir khan", image: "/images/home/d1.png" },
  { id: 2, name: "Nitin Kakkar ", image: "/images/home/d2.png" },
  { id: 3, name: "Nikhil Advani", image: "/images/home/d3.png" },
  { id: 3, name: "Jean-François Pouliot", image: "/images/home/d4.png" },
  { id: 3, name: "Ali Abbas Zafar", image: "/images/home/d5.png" },
  { id: 3, name: "Mahesh Manjrekar", image: "/images/home/d6.png" },
];
const DirectorsSection = () => {

  const titleRef = useRef(null);
  const paraRef = useRef(null);

  useSplitTextMaskAnimation([titleRef,paraRef])

  return (
    <section id="directors_section">
      <h5 className="tag">Directors</h5>
      <h3 ref={titleRef} className="heading">
        Visionaries Be<span className="letter-u">h</span>ind the <br /> Ca
        <span className="letter-u">m</span>era
      </h3>
      <DirectorsContainer data={directors} />
    </section>
  );
};

export default DirectorsSection;
