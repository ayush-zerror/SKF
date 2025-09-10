import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const Loader = () => {
  const loaderRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return; // run animation only on home

    const letters = loaderRef.current.querySelectorAll(".letter_inner");
    const h2 = loaderRef.current.querySelector("h2");
    const loader = loaderRef.current;
    const nav = document.querySelector("nav");

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      defaults: { ease: "power2.out", overwrite: "auto" },
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });

    tl.to(letters, {
      duration: 0.8,
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      delay: 0.5,
    })
      .to(letters, {
        width: 0,
        padding: 0,
        duration: 0.3,
        ease: "linear",
      })
      .to(h2, {
        scale: 4,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      })
      .to(loader, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          loader.style.display = "none";
        },
      })
      .fromTo(
        nav,
        { y: "-100%" },
        { y: "0%", duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
  }, [pathname]);

  // render nothing if not home
  if (pathname !== "/") return null;

  return (
    <div id="main_loader" ref={loaderRef}>
      <h2>
        <span>
          S<span className="letter_inner letter_space">alman</span>
        </span>
        <span>
          K<span className="letter_inner letter_space">han</span>
        </span>
        <span>
          F<span className="letter_inner">lims</span>
        </span>
      </h2>
    </div>
  );
};

export default Loader;
