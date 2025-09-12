import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";
import React, { useRef } from "react";

const SynopsisSection = () => {
  const titleRef = useRef(null);
  const paraRef1 = useRef(null);
  const paraRef2 = useRef(null);
  const paraRef3 = useRef(null);
  
    useSplitTextMaskAnimation([titleRef,paraRef1,paraRef2,paraRef3]);
  return (
    <section id="synopsis_section">
      <h5 className="tag">Synopsis</h5>
      <h2 ref={titleRef} className="heading">
        Discover the s<span className="letter-u">t</span>ory, <br /> the pe
        <span className="letter-l">o</span>ple behind it.
      </h2>
      <div className="synopsis_info">
        <p ref={paraRef1} className="description">
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          The trouble begins when politician Shashikant Bhide announces that all
          stray dogs will be caught and killed unless societies submit a No
          Objection Certificate (NOC). This puts Bhidu’s life at risk, and the
          kids launch a campaign across the colony to save him. They go
          door-to-door, trying to convince adults, but fall short of the votes
          needed.
        </p>
        <p ref={paraRef2} className="description">
          In a desperate move, the children stage an underwear march, grabbing
          media attention and public sympathy. Their bold act sparks
          conversation and support, but it still isn’t enough to overturn
          Bhide’s rule.
        </p>
        <p ref={paraRef3} className="description">
          Their final chance comes in a televised debate, where the kids’
          honesty and innocence win over the audience. Inspired, society
          secretary Mr. Tandon changes his stance, and Bhidu is finally accepted
          into the colony — proving that courage and truth can triumph over
          prejudice.
        </p>
      </div>
    </section>
  );
};

export default SynopsisSection;
