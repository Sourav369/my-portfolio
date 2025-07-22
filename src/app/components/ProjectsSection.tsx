"use client";

import React, { useEffect, useRef, useState } from "react";
import "./ProjectsSection.css";

const companyProjects = [
  {
    title: "QA Metrics Dashboard",
    description:
      "A real-time dashboard for QA and product leads to monitor test coverage, defect trends, and release readiness.",
    stack: "React.js, Chart.js, .NET Core, Entity Framework, Azure SQL",
  },
  {
    title: "Release Management Tool",
    description:
      "An internal portal to track deployment statuses, release notes, and logs across staging and production environments.",
    stack: "React.js, ASP.NET MVC, Azure DevOps, Blob Storage",
  },
];

const personalProjects = [
  {
    title: "Artist Portfolio Website",
    description:
      "Designed and deployed a mobile-friendly portfolio site for an artist with smooth image transitions and custom CSS styling.",
    stack: "Next.js, React.js, HTML5, CSS3",
    link: "https://artist-portfolio-seven-virid.vercel.app/",
  },
  {
    title: "Blood Guard",
    description:
      "A donor engagement app with health monitoring, chatbot integration, and notification features.",
    stack: "React.js, Node.js, Express.js",
  },
  {
    title: "Event Management Portal",
    description:
      "A full-stack event scheduling app with robust APIs and Angular + .NET integration.",
    stack: "Angular, ASP.NET, RESTful API",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`projects-section ${isVisible ? "visible" : ""}`}
    >
      <h2 className="projects-heading">Projects</h2>

      <div className="project-group">
        <h3 className="project-subheading">Company Projects</h3>
        <div className="project-cards">
          {companyProjects.map((proj, index) => (
            <div key={index} className="project-card">
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
              <p className="stack">{proj.stack}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="project-group">
        <h3 className="project-subheading">Personal Projects</h3>
        <div className="project-cards">
          {personalProjects.map((proj, index) => (
            <div key={index} className="project-card">
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
              <p className="stack">{proj.stack}</p>
              {proj.link && (
                <a
                  className="visit-link"
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
