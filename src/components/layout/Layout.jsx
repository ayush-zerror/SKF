import React, { useRef } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Loader from "../loader/Loader";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Loader />
    </>
  );
};

export default Layout;
