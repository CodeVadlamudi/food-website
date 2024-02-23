import DrinksMenu from "@/components/DrinksMenu";
import HeroMenu from "@/components/HeroMenu";
import MainsMenu from "@/components/MainsMenu";
import StarterMenu from "@/components/StarterMenu";
import React from "react";

function Menu() {
  return (
    <main>
      <HeroMenu />
      <StarterMenu />
      <MainsMenu />
      <DrinksMenu />
    </main>
  );
}

export default Menu;
