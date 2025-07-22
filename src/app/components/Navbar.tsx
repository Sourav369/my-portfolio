"use client";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.8;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-left">
          <div
            className="branding"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          >
            <h1>Sourav Madan</h1>
            <span>Full Stack Developer | RMIT Graduate</span>
          </div>
        </div>

        {/* ✅ Keep this wrapper for correct position */}
        <div
          className="hamburger-wrapper"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div className={`hamburger ${isScrolled ? "white" : ""}`}>
            <div className={`bar ${isMenuOpen ? "open" : ""}`} />
            <div className={`bar ${isMenuOpen ? "open" : ""}`} />
            <div className={`bar ${isMenuOpen ? "open" : ""}`} />
          </div>
        </div>

        <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <a href="#expertise" onClick={() => setIsMenuOpen(false)}>
            Expertise
          </a>
          <a href="#history" onClick={() => setIsMenuOpen(false)}>
            History
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
