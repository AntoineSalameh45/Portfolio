import React, { useState, useEffect } from "react";
import "../App.css";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/intro">Intro</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
