import { navLinks } from "@/helper/menuData";
import Link from "next/link";
import React from "react";

const NavigationMenu = ({ setMenu }) => {
  return (
    <div id="navigation">
      <div className="menu-links">
        {navLinks.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className={`${label}`}
            onClick={() => setMenu(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;
