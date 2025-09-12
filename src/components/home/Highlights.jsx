import React, { useRef } from "react";
import HighlightCard from "./HighlightCard";
import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";
// highlightData.js
export const highlightData = [
  {
    id: 1,
    date: "August 1, 2025",
    title: "Sikander Creates Box Office Storm",
    category: "Movies",
    image: "/images/home/news1.png",
  },
  {
    id: 2,
    date: "August 1, 2025",
    title: "Kisi Ka Bhai Kisi Ki Jaan Finds New Audience on OTT",
    category: "Movies",
    image: "/images/home/news2.png",
  },
  {
    id: 3,
    date: "August 1, 2025",
    title: "Kick 2 Brings Back Devil in Style",
    category: "Movies",
    image: "/images/home/news3.png",
  },
];

const Highlights = () => {
  const titleRef = useRef(null);
    useSplitTextMaskAnimation([titleRef])
  
  return (
    <section id="highlight_section">
      <h5 className="tag">highlight</h5>
      <h2 ref={titleRef}>News and Updates</h2>
      <div id="highlights_container">
        {highlightData.map((item) => (
          <HighlightCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Highlights;
