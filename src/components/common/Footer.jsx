import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer>
      <div id="footer_top">
        <h2>Salman Khan Flims</h2>
        <Button title={'contact'} color={'white'} />
      </div>
      <div id="footer_bottom">
        <div id="footer_bottom_left">
          <Link href="/">Careers</Link>
          <Link href="/">Disclaimer</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms and Condition</Link>
        </div>
        <div id="footer_bottom_right">
          <Link href="/">salmankhanflims@gmail.com</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
