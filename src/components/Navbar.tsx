import React from "react";
import { Link } from "react-scroll"; // Import Link จาก react-scroll
import './style/Navbar.css';

const Navbar : React.FC = () => {
    return(
        <nav className="navbar">
            <div className="navbar-title">Nuttagun Samanjai</div>
            <ul className="navbar-list">
                <li><Link to="Home" smooth={true} duration={500} activeClass="active">Home</Link></li>
                <li><Link to="skills" smooth={true} duration={500} activeClass="active">Tech Stack</Link></li>
                <li><Link to="projects" smooth={true} duration={500} activeClass="active">Projects</Link></li>
                <li><Link to="certificates" smooth={true} duration={500} activeClass="active">Certificates</Link></li>
                <li><Link to="contact" smooth={true} duration={500} activeClass="active">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;