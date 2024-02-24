import React from "react";
import "../App.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      {/* <img src="src\assets\BIG-A-wallpaper-2-(3).png" alt="big-a-logo" /> */}
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