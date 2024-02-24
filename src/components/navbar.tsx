import React, { useState, useEffect } from "react";
import "../css/nav.css";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    const checkActiveLink = () => {
      const links = document.querySelectorAll("nav ul li a");
      links.forEach((link) => {
        if (window.location.href.includes(link.getAttribute("href") || "")) {
          setActiveLink(link.getAttribute("href") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    checkActiveLink();

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <ul>
        <li><a href="/" className={activeLink === "/" ? "active" : ""}>Home</a></li>
        <li><a href="/intro" className={activeLink === "/intro" ? "active" : ""}>Intro</a></li>
        <li><a href="/projects" className={activeLink === "/projects" ? "active" : ""}>Projects</a></li>
        <li><a href="/contact" className={activeLink === "" ? "active" : ""}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
