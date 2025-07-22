import React, { useState } from "react";
import { Link } from "react-scroll";
import './style/Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-title">Nuttagun Samanjai</div>

      <button 
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-list ${menuOpen ? "show" : ""}`}>
        <li><Link to="Home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Tech Stacks</Link></li>
        <li><Link to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="certs" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Certificates</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
