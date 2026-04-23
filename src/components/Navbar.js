import { useEffect } from "react";

function Navbar() {

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home" className="logo">VLM</a>
      </div>

      <div className="nav-right">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#research">Interests</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;