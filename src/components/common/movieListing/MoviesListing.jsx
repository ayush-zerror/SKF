import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import MovieCard from "./MovieCard";
import Button from "../Button";

const MoviesListing = ({ isHero, data }) => {
  const viewBtnRef = useRef(null);
  const containerRef = useRef(null);
  const filters = ["all", "released", "upcoming movies"];
  const [filter, setFilter] = React.useState("released");

  useEffect(() => {
    if (!data || !containerRef.current || !viewBtnRef.current) return;

    const btn = viewBtnRef.current;
    const container = containerRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let prevX = 0;
    let prevY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(btn, {
        opacity: 1,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(btn, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { opacity: 0, duration: 0.3 });
    };

    const render = () => {
      const dx = mouseX - prevX;
      const dy = mouseY - prevY;

      prevX += dx * 0.2;
      prevY += dy * 0.2;

      const dist = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.15, 10);

      // Get button dimensions
      const rect = btn.getBoundingClientRect();
      const btnHalfWidth = rect.width / 2;
      const btnHalfHeight = rect.height / 2;

      gsap.set(btn, {
        left: prevX - btnHalfWidth,
        top: prevY - btnHalfHeight,
        scaleX: 1 + dist / 60,
        scaleY: 1 - dist / 50,
        transformOrigin: "center",
      });

      requestAnimationFrame(render);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    render();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [data]);

  return (
    <section id="movie_listing" className={`${isHero ? "hero" : ""}`}>
      <div className="movie_listing_header">
        <h5 className="tag">Movies</h5>
        <h3 className="heading">
          Explore our top fil<span className="letter-u">m</span>s loved by{" "}
          <br /> audien<span className="letter-l">c</span>es worldwi
          <span>d</span>e.
        </h3>

        {/* Filter Section */}
        <div className="filter_movie">
          {filters.map((f, idx) => (
            <span
              key={idx}
              onClick={() => setFilter(f)}
              className={`${f === filter ? "active" : ""} `}
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Movie Container */}
      {!isHero && (
        <div ref={containerRef} id="movie_container">
          {data.map((movie, index) => (
            <MovieCard key={index} data={movie} />
          ))}
        </div>
      )}

      {isHero && (
        <div id="movie_container_ishero">
          {data
            .reduce((rows, item, index) => {
              if (index % 2 === 0) rows.push([item]);
              else rows[rows.length - 1].push(item);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div key={rowIndex} className="movie_container_row">
                {row.map((movie, colIndex) => (
                  <MovieCard key={rowIndex + "-" + colIndex} data={movie} />
                ))}
              </div>
            ))}
        </div>
      )}

      {isHero && (
        <div className="movie_listing_btn">
          <Button color={"red"} title={"show more"} />
        </div>
      )}

      {/* View More Button */}
      {!isHero && (
        <div ref={viewBtnRef} id="view_btn">
          view more
        </div>
      )}
    </section>
  );
};

export default MoviesListing;
