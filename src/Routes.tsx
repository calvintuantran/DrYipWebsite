import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import UpperNavBar from "./components/Upper_NavBar";
import LowerNavBar from "./components/Lower_NavBar.jsx";
import HomePage from "./components/HomePage";
import About from "./components/About.jsx";
import Research from "./components/Research.jsx";
import Medication from "./components/Medication.jsx";

// Utils
import Responsive from "./helpers/isMobile";

export function RouteStore() {
  const isMobile = Responsive.isMobileDevice();

  console.log("isMobile", isMobile);
  return (
    <>
      {!isMobile && <UpperNavBar />}
      <LowerNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="About Dr.Yip" element={<About />} />
        <Route path="research" element={<Research />} />
        <Route path="medications" element={<Medication />} />
      </Routes>
    </>
  );
}
