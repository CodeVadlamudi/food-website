import React from "react";
import Header from "./Header";
import SectionMenu from "./SectionMenu";

function HeroMenu() {
  return (
    <main
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/menu-hero-img.jpg')",
      }}
      className="bg-center bg-no-repeat bg-cover"
    >
      <Header />
      <SectionMenu />
    </main>
  );
}

export default HeroMenu;
