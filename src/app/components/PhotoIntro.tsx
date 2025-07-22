// src/app/components/PhotoIntro.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import "./PhotoIntro.css"; // Make sure this path is correct

export default function PhotoIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setVisible(inView);

        // ✅ Change body background based on visibility
        document.body.style.backgroundColor = "#000";
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="photo-intro-section" ref={sectionRef}>
      <div className={`photo-container ${visible ? "animate" : ""}`}>
        <img src="grad-photo.jpeg" alt="Sourav Madan" />
      </div>
      <div className="intro-text">
        <h2>Hello, I&apos;m Sourav</h2>
        <p>
          Full Stack Developer based in Melbourne with 2.5 years at Bosch and
          currently pursuing my Master’s at RMIT. I specialize in React, .NET,
          and Azure – and love building meaningful, scalable web apps.
        </p>
      </div>
    </div>
  );
}
