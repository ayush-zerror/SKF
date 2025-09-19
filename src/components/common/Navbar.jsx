import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { navLinks } from "@/helper/menuData";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import NavigationMenu from "./NavigationMenu";

const Navbar = () => {
  const navRef = useRef(null);
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const menuTL = useRef();

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

  // ✅ Navbar styles
  const navStyle = isDarkRoute
    ? {
        transform: pathname === "/" ? "translateY(-100%)" : "",
      }
    : {
        transform: "none",
      };

  useGSAP(() => {
    menuTL.current = gsap
      .timeline({ paused: true })
      .to(
        ".line1m",
        {
          top: "50%",
          transform: "translateY(-50%)",
          duration: 0.2,
        },
        "a"
      )
      .to(
        ".line2m",
        {
          top: "50%",
          transform: "translateY(-50%)",
          duration: 0.2,
        },
        "a"
      )
      .to(
        ".line1m",
        {
          rotate: 45,
          duration: 0.2,
        },
        "b"
      )
      .to(
        ".line2m",
        {
          rotate: -45,
          duration: 0.2,
        },
        "b"
      )
      .to(
        ".line3m",
        {
          scaleX: 0,
          duration: 0.2,
          delay: -0.1,
        },
        "b"
      )
      .to(
        "#navigation",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.3,
          ease: "power2.out",
        },
        "a"
      );
  }, []);

  // ✅ This watches state and runs animation properly
  useEffect(() => {
    if (menuTL.current) {
      if (menu) {
        menuTL.current.play();
      } else {
        menuTL.current.reverse();
      }
    }
  }, [menu]);

  // ✅ Toggle function remains clean
  const toggleMenu = () => {
    setMenu((prev) => !prev);
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

      <div id="menu-btn" onClick={toggleMenu}>
        <span className="line1m linem"></span>
        <span className="line3m linem"></span>
        <span className="line2m linem"></span>
      </div>
     <NavigationMenu setMenu={setMenu} />
    </nav>
  );
};

export default Navbar;
