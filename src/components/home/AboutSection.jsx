import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";
import React, { useRef } from "react";

const AboutSection = () => {
  const titleRef = useRef(null);
  const paraRef1 = useRef(null);
  const paraRef2 = useRef(null);
  useSplitTextMaskAnimation([titleRef, paraRef1, paraRef2]);

  return (
    <section id="about_section">
      <div className="about_overlay">
        <h5 className="tag">About</h5>
        <h2 ref={titleRef} className="heading">
          Bringing Sto<span className="letter-u">r</span>ies to Life, One <br />{" "}
          Block<span className="letter-u">b</span>uster at a Time
        </h2>
        <p ref={paraRef1} className="description">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Founded in 2011 by Salman
          Khan, Salman Khan Films (SKF) is a Mumbai-based production house
          behind blockbusters like Bajrangi Bhaijaan, Race 3, and Antim. Known
          for powerful storytelling, grand entertainment.
        </p>
        <p ref={paraRef2} className="description">
           The company is known not only for bringing grand cinematic
          experiences to the audience but also for supporting fresh talent and
          innovative storytelling.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
