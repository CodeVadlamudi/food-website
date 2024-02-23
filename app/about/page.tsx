import DeliciousAbout from "@/components/DeliciousAbout";
import HeroAbout from "@/components/HeroAbout";
import StaffAbout from "@/components/StaffAbout";
import StoryAbout from "@/components/StoryAbout";
import React from "react";

function About() {
  return (
    <div>
      <HeroAbout />
      <StoryAbout />
      <StaffAbout />
      <DeliciousAbout />
    </div>
  );
}

export default About;
