// src/app/components/ExpertiseSection.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import "./ExpertiseSection.css";

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
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
    <section
      id="expertise"
      ref={sectionRef}
      className={`expertise-section ${isVisible ? "animate" : ""}`}
    >
      <h2 className="expertise-heading">My Expertise</h2>
      <div className="cards-container">
        {/* Frontend Card */}
        <div className="expertise-card">
          <h3>Frontend Development</h3>
          <p>
            Skilled in building modern and responsive UIs using component-based
            frameworks. Experienced with design systems and accessibility best
            practices.
          </p>
          <div className="tech-tags">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
          </div>
        </div>

        {/* Backend Card */}
        <div className="expertise-card">
          <h3>Backend Development</h3>
          <p>
            Experienced in creating REST APIs and scalable backend services
            using modern frameworks, ORM tools, and secure authentication
            practices.
          </p>
          <div className="tech-tags">
            <span>.NET Core</span>
            <span>C#</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Azure SQL</span>
            <span>Prisma ORM</span>
          </div>
        </div>

        {/* DevOps Card */}
        <div className="expertise-card">
          <h3>DevOps & Deployment</h3>
          <p>
            Proficient with CI/CD pipelines, cloud platforms, containerization,
            and monitoring tools to automate and streamline deployments.
          </p>
          <div className="tech-tags">
            <span>Azure</span>
            <span>GitHub Actions</span>
            <span>Docker</span>
            <span>Vercel</span>
            <span>Azure DevOps</span>
            <span>Multer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
