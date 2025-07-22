"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [topOffset, setTopOffset] = useState(64); // Default desktop nav height

  useEffect(() => {
    const updateOffset = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        const navHeight = nav.getBoundingClientRect().height;
        setTopOffset(navHeight); // Dynamically update top
      }
    };

    // Run once after render
    updateOffset();

    // Update on window resize in case nav changes
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) {
        progressBar.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="scroll-progress"
      style={{
        position: "fixed",
        top: topOffset, // ✅ dynamically set
        left: 0,
        height: "4px",
        width: "0%",
        backgroundColor: "#f4d06f",
        zIndex: 9999,
        transition: "width 0.25s ease-out",
      }}
    />
  );
}
