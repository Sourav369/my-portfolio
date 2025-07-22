"use client";
import React, { useEffect, useRef, useState } from "react";
import "./TechStackSection.css";

const techIcons = [
  { name: "React", src: "/tech-icons/react.png" },
  { name: "Next.js", src: "/tech-icons/nextjs.png" },
  { name: "TypeScript", src: "/tech-icons/ts.png" },
  { name: "JavaScript", src: "/tech-icons/js.png" },
  { name: "HTML5", src: "/tech-icons/html.png" },
  { name: ".NET Core", src: "/tech-icons/net.png" },
  { name: "Node.js", src: "/tech-icons/nodejs.png" },
  { name: "SQL", src: "/tech-icons/sql.png" },
  { name: "Docker", src: "/tech-icons/docker.png" },
  { name: "Azure", src: "/tech-icons/azure.png" },
];

export default function TechStack() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMobileTap = (index: number) => {
    setActiveIndex(index);
    setTimeout(() => {
      setActiveIndex(null);
    }, 2000); // Hide tooltip after 2 seconds
  };
  return (
    <section
      id="techstack"
      ref={sectionRef}
      className={`tech-stack-section ${visible ? "animate" : ""}`}
    >
      <h2 className="techstack-heading">Tech Stack</h2>
      <div className="tech-grid">
        {techIcons.map((icon, index) => (
          <div
            key={icon.name}
            className={`tech-item ${activeIndex === index ? "tapped" : ""}`}
            onClick={() => handleMobileTap(index)}
          >
            <div className="tooltip-wrapper">
              <img src={icon.src} alt={icon.name} />
              <span
                className={`tooltip-text ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                {icon.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
