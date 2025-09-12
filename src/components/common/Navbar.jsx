"use client";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { navLinks } from "@/helper/menuData";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navRef = useRef(null);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const splitLetters = (text) =>
    text.split("").map((letter, i) => <span key={i}>{letter}</span>);

  const animateLetters = (selector) => {
    const letters = navRef.current.querySelectorAll(selector);
    gsap.fromTo(
      letters,
      { yPercent: 0 },
      {
        yPercent: -100,
        stagger: { amount: 0.1 },
        duration: 0.3,
        ease: "power2.out",
      }
    );
  };

  const handleHover = (cls) => {
    animateLetters(`.${cls} .title1 span`);
    animateLetters(`.${cls} .title2 span`);
  };

  // ✅ Determine animated routes
  const isDarkRoute = pathname === "/" || pathname?.startsWith("/movies/");

  // ✅ Scroll handler only for animated routes
  useEffect(() => {
    if (!isDarkRoute) return; // no scroll handling for other routes

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.85) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkRoute]);

  // ✅ Navbar styles
  const navStyle = isDarkRoute
    ? {
        transform: pathname === "/" ? "translateY(-100%)" : "",
      }
    : {
        transform: "none",
      };

  return (
    <nav ref={navRef} id="navbar" style={navStyle}>
      <Link id="logo" href="/">
        <Image
          width={1000}
          height={1000}
          src="/images/skf_logo.png"
          alt="skf_logo"
        />
      </Link>

      <div className="nav_links">
        {navLinks.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className={`nav_item ${label}`}
            onMouseEnter={() => handleHover(label)}
          >
            <span className="title1">{splitLetters(label)}</span>
            <span className="title2">{splitLetters(label)}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
