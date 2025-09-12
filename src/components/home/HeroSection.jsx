import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const loaderRef = useRef(null);
  const landingVideoRef = useRef(null);

  useEffect(() => {
    // 🚫 Immediately lock scroll when loader mounts
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const runAnimation = () => {
      const letters = loaderRef.current.querySelectorAll(".letter_inner");
      const kLetter = loaderRef.current.querySelector(".K_letter");
      const videoEl = landingVideoRef.current.querySelector("video");
      const navEl = document.querySelector("nav");

      // Set landing_video width same as K_letter
      if (kLetter && landingVideoRef.current) {
        const kWidth = kLetter.offsetWidth - 4.5;
        landingVideoRef.current.style.width = `${kWidth}px`;
        landingVideoRef.current.style.clipPath =
          "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"; // initially hidden
      }

      // Set video initial clip-path hidden
      if (videoEl) {
        videoEl.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
      }

      const tl = gsap.timeline({
        defaults: { ease: "power2.out", overwrite: "auto" },
        onComplete: () => {
          // ✅ Unlock scroll after animation ends
          document.documentElement.style.overflow = "";
          document.body.style.overflow = "";
        },
      });

      tl.to(letters, {
        duration: 1.6,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        delay: 0.2,
        ease: "expo.in",
      })
        .to(letters, {
          width: 0,
          padding: 0,
          duration: 0.6,
          ease: "expo.in",
        })
        .to(landingVideoRef.current, {
          duration: 0.8,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "expo.in",
        })
        .to(videoEl, {
          duration: 0.8,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "expo.in",
        })
        .to(landingVideoRef.current, {
          duration: 0.8,
          width: "100%",
          height: "100%",
          top: "50%",
          left: "50%",
          ease: "power2.inOut",
        })
        .to(navEl, {
          duration: 0.8,
          transform: "translateY(0%)",
          overwrite: "auto",
          ease: "power4.out",
        });
    };

    // Wait for fonts or fallback to window.load
    if (document.fonts) {
      document.fonts.ready.then(runAnimation);
    } else {
      window.addEventListener("load", runAnimation);
      return () => window.removeEventListener("load", runAnimation);
    }

    // 🧹 Cleanup: always restore scroll on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div id="hero_section" ref={loaderRef}>
      <h2>
        <span>
          <span>S</span>
          <span className="letter_inner letter_space">alman</span>
        </span>
        <span>
          <span className="K_letter">k</span>
          <span className="letter_inner letter_space">han</span>
        </span>
        <span>
          <span>F</span>
          <span className="letter_inner">lims</span>
        </span>
      </h2>
      <div id="landing_video" ref={landingVideoRef}>
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/images/home/hero.mp4"
        ></video>
      </div>
    </div>
  );
};

export default HeroSection;
