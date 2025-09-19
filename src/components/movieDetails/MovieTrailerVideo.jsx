import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const MovieTrailerVideo = ({ showVideo, setShowVideo }) => {
  const overlayRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(showVideo);

  useEffect(() => {
    if (showVideo) {
      setIsVisible(true); // ensure mounted
    }
  }, [showVideo]);

  useEffect(() => {
    const navEl = document.querySelector("nav");
    if (isVisible && overlayRef.current && containerRef.current && navEl) {
      const tl = gsap.timeline();

      // Step 1: Fade in overlay
      tl.fromTo(
        overlayRef.current,
        { backgroundColor: "rgba(0,0,0,0)", pointerEvents: "none" },
        {
          backgroundColor: "rgba(0,0,0,0.5)", // lighter background
          duration: 0.5, // smoother
          ease: "power2.out",
          onStart: () => {
            overlayRef.current.style.pointerEvents = "auto";
          },
        }
      )

        // Step 2: Slide + fade in video container
        .fromTo(
          containerRef.current,
          { autoAlpha: 0, y: "-100%", scale: 0.7 },
          { autoAlpha: 1, y: "0%", duration: 0.5, ease: "power4.out" }
        )

        .to(
          navEl,
          {
            duration: 0.8,
            transform: "translateY(-105%)",
            overwrite: "auto",
            ease: "power4.out",
          },
          "u"
        )
        // Step 3: Scale to normal
        .to(
          containerRef.current,
          {
            scale: 1,
            duration: 0.35,
            ease: "power3.out",
            onComplete: () => {
              // ✅ Play video after animation finishes
              if (videoRef.current) {
                videoRef.current.play().catch((err) => {
                  console.log("Autoplay with sound might be blocked:", err);
                });
              }
            },
          },
          "u"
        );
    }
  }, [isVisible]);

  const handleClose = () => {
    const nav = document.querySelector("nav");
    // ✅ Stop & reset video first
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset to start
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        setShowVideo(false);
      },
    });

    // Animate container + overlay
    tl.to(
      containerRef.current,
      {
        scale: 0.85, // smoother shrink
        duration: 0.35,
        ease: "power3.in",
      },
      "u"
    )
      .to(
        nav,
        {
          duration: 0.8,
          transform: "translateY(0%)",
          overwrite: "auto",
          ease: "power4.out",
        },
        "u"
      )
      .to(containerRef.current, {
        autoAlpha: 0,
        y: "-100%",
        duration: 0.5,
        ease: "power4.in",
      })
      .to(overlayRef.current, {
        backgroundColor: "rgba(0,0,0,0)",
        duration: 0.45,
        ease: "power2.inOut",
        onStart: () => {
          overlayRef.current.style.pointerEvents = "none";
        },
      });
  };

  if (!isVisible) return null;

  return (
    <div ref={overlayRef} id="movie_trailer_video">
      <div ref={containerRef} className="movie_trailer_container">
        <button onClick={handleClose}>✖</button>
        <video ref={videoRef} src="/images/home/loader.mp4" controls>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MovieTrailerVideo;
