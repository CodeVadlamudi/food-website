import React from "react";
import Header from "./Header";
import SectionContact from "./SectionContact";

function HeroContact() {
  return (
    <main
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/menu-hero-img.jpg')",
      }}
      className="bg-center bg-no-repeat bg-cover"
    >
      <Header />
      <SectionContact />
    </main>
  );
}

export default HeroContact;
