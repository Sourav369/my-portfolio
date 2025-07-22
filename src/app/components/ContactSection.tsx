// src/app/components/ContactSection.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./ContactSection.css";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`contact-section ${isVisible ? "visible" : ""}`}
    >
      <div className="contact-content">
        <h2 className="contact-heading">Let’s Connect</h2>
        <p className="contact-subtext">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
        <a href="mailto:souravmadan.dev@gmail.com" className="contact-button">
          Say Hello!
        </a>
      </div>

      {/* ✅ Footer Pinned to Bottom Center */}
      <div className="contact-footer">
        <div className="contact-icons">
          <a
            href="https://github.com/Sourav369"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sourav-madan-0a46701aa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="contact-footer-text">My portfolio Sourav Madan</p>
      </div>
    </section>
  );
}
