import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SmoothScroller from "@/components/smoothScroll/SmoothScroller";
import "@/styles/globals.css";
import "@/styles/components/common/navbar.css";
import "@/styles/components/common/footer.css";
import "@/styles/components/common/button.css";
import "@/styles/components/home.css";
import "@/styles/components/movieDetails.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SmoothScroller />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
