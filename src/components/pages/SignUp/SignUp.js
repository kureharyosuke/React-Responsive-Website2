import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";

import { homeObjOne, homeObjTwo, homeObjThree } from "../SignUp/Data";

function SignUp() {
  return (
    <>
      {/* <HeroSection {...homeObjOne} /> */}
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <Pricing />
    </>
  );
}

export default SignUp;
