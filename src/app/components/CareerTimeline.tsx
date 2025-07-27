"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CareerTimeline.css";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "InfiData Technologies, Bengaluru",
    duration: "Jan 2021 – Jun 2021",
    description:
      "Built internal tools using HTML, CSS, JavaScript, and ASP.NET. Contributed to backend logic in C# and SQL Server, resolved UI bugs, and worked in an Agile setup to support sprint-based delivery and documentation.",
  },
  {
    title: "Associate Software Engineer",
    company: "Bosch Global Software, Bengaluru",
    duration: "Aug 2021 – Jan 2024",
    description:
      "Developed full-stack internal applications using .NET Core, React.js, and Azure App Services. Built real-time QA dashboards and release tools, implemented CI/CD pipelines, and collaborated in Agile sprints to deliver cloud-native enterprise features.",
  },
  {
    title: "Postgraduate Student",
    company: "RMIT University, Melbourne",
    duration: "Feb 2024 – Nov 2025",
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
