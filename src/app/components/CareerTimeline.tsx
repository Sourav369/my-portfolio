"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CareerTimeline.css";

const experiences = [
  {
    title: "PHP Intern",
    company: "InfiData Technologies, Bengaluru",
    duration: "Jan 2021 – Jun 2021",
    description: "PHP Dashboard, Documentation, PHP Bootstrap",
  },
  {
    title: "Associate Software Engineer",
    company: "Bosch Global Software, Bengaluru",
    duration: "Aug 2021 – Jan 2024",
    description: ".NET, React, Azure DevOps, Agile Scrum",
  },
  {
    title: "Postgraduate Student",
    company: "RMIT University, Melbourne",
    duration: "Feb 2024 – Present",
    description: "Master's in IT ",
  },
];

const CareerTimeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="history" className="career-timeline">
      <h2 className="career-heading">Career History</h2>
      <div className="timeline-wrapper">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;
