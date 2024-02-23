import React from "react";
import Header from "./Header";
import SectionAbout from "./SectionAbout";

function HeroAbout() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/about-img.jpg')",
      }}
      className="bg-center bg-no-repeat bg-cover"
    >
      <Header />
      <SectionAbout />
    </section>
  );
}

export default HeroAbout;
