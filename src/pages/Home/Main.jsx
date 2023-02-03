/** @format */

import React from "react";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import Footer from "../Footer/Footer";
import SectionFour from "./components/SectionFour/SectionFour";

const Main = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
};

export default Main;
