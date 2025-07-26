import React from "react";
import "./hero-skills.css";
export const HeroSkills = () => {
  return (
    <div className="relative skill-glass-container hidden sm:block">
      <h3 className="skill skill-1">MVP</h3>
      <h3 className="skill skill-2 skill-blur">UX/UI Design</h3>
      <h3 className="skill skill-3 skill-transparent">Discovery</h3>
      <h3 className="skill skill-4 skill-transparent">Development</h3>
      <h3 className="skill skill-5 skill-blur ">Web & Mobile Design</h3>
    </div>
  );
};
