import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjOne, homeObjFour } from "./Data";

function Services() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Services;
