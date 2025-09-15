import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const PlaySvg = ({ setShowVideo }) => {
  const pathRefs = useRef([]);
  const svgRef = useRef(null);

  useEffect(() => {
    const [bluePath, aquaPath] = pathRefs.current;
    if (!bluePath || !aquaPath) return;

    const length = bluePath.getTotalLength();

    // Setup stroke
    [bluePath, aquaPath].forEach((p) => {
      p.style.strokeDasharray = `${length / 3} ${length}`;
      p.style.strokeDashoffset = length;
      p.style.opacity = 0; // hidden initially
    });

    const tl = gsap.timeline({ repeat: -1, paused: true });

    // Blue main leader
    tl.to(bluePath, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 0.6,
      ease: "none",
    }).to(bluePath, {
      strokeDashoffset: -length,
      duration: 0.6,
      ease: "none",
    });

    // Aqua follows *slightly* delayed
    tl.to(
      aquaPath,
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 0.6,
        ease: "none",
      },
      "-=1.0" // start aqua just after blue begins
    ).to(
      aquaPath,
      {
        strokeDashoffset: -length,
        duration: 0.6,
        ease: "none",
      },
      "-=0.6"
    );

    // Add a pause of 1s before next loop
    tl.to({}, { duration: 0.6 });

    // Hover handlers
    const svg = svgRef.current;
    const handleEnter = () => tl.play(0); // restart fresh
    const handleLeave = () => {
      tl.pause(0);
      [bluePath, aquaPath].forEach((p) => {
        p.style.strokeDashoffset = length;
        p.style.opacity = 0; // reset hidden
      });
    };

    svg.addEventListener("mouseenter", handleEnter);
    svg.addEventListener("mouseleave", handleLeave);

    return () => {
      svg.removeEventListener("mouseenter", handleEnter);
      svg.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <svg
      onClick={() => setShowVideo(true)}
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-30 -35 60 70"
      width="200"
      height="232"
      preserveAspectRatio="xMidYMid meet"
      style={{ cursor: "pointer" }}
    >
      {/* Base white stroke (always visible) */}
      <path
        d="M22.5,0 C22.5,0 -22.5,-30 -22.5,-30 C-22.5,-30 -22.5,30 -22.5,30 C-22.5,30 22.5,0 22.5,0z"
        stroke="white"
        strokeWidth="2.3"
        fill="none"
      />

      {/* Blue stroke */}
      <path
        ref={(el) => (pathRefs.current[0] = el)}
        d="M22.5,0 C22.5,0 -22.5,-30 -22.5,-30 C-22.5,-30 -22.5,30 -22.5,30 C-22.5,30 22.5,0 22.5,0z"
        stroke="blue"
        strokeWidth="2.3"
        fill="none"
      />

      {/* Aqua stroke */}
      <path
        ref={(el) => (pathRefs.current[1] = el)}
        d="M22.5,0 C22.5,0 -22.5,-30 -22.5,-30 C-22.5,-30 -22.5,30 -22.5,30 C-22.5,30 22.5,0 22.5,0z"
        stroke="aqua"
        strokeWidth="2.3"
        fill="none"
      />
    </svg>
  );
};

export default PlaySvg;
