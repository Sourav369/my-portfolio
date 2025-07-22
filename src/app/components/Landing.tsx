// src/app/components/Landing.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";

export default function Landing() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [blurred, setBlurred] = useState(false);

  // Blur after 5s on initial load
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlurred(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  // Reset blur on scroll-to-top (no video restart)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setBlurred(false);
        // No restart of video — just reapply blur after delay
        setTimeout(() => setBlurred(true), 5000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-container">
      {/* ✅ Scroll Indicator placed at top for mobile */}
      <div className="scroll-indicator-mobile">━</div>

      <video
        ref={videoRef}
        className={`landing-video ${blurred ? "blurred" : ""}`}
        src="/intro3.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="overlay-text">
        <p className="headline">Front to back. Pixel to pipeline.</p>
        <p className="subline">Scroll to see what I do.</p>
      </div>
    </div>
  );
}
