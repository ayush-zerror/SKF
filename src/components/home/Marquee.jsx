import React from "react";

const Marquee = ({ text }) => {
  return (
    <div id="marquee_container">
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
    </div>
  );
};

export default Marquee;
