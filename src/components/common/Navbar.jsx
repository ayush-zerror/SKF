"use client";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Navbar = () => {
  const navRef = useRef(null);

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

  // 🔹 Dynamic links
  const navLinks = [
    { href: "/movies", label: "movies" },
    { href: "/about", label: "about" },
    { href: "/highlights", label: "highlights" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <nav id="navbar" ref={navRef}>
      <Link id="logo" href="/">
        <Image width={1000} height={1000} src='/images/skf_logo.png' alt="skf_logo" />
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
