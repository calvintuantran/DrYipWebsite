import { Routes, Route } from "react-router-dom";

// Components
import UpperNavBar from "./components/Upper_NavBar";
import LowerNavBar from "./components/Lower_NavBar.jsx";
import MobileNavBar from "./components/MobileNavBar";
import HomePage from "./components/HomePage";
import About from "./components/About.jsx";
import Research from "./components/Research.jsx";
import Medication from "./components/Medication.jsx";

import { IsMobile } from "./isMobile";

// Breakpoints
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export function RouteStore() {
  let theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      {!IsMobile() && <UpperNavBar />}
      <LowerNavBar />
      {IsMobile() && <MobileNavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="About Dr.Yip" element={<About />} />
        <Route path="research" element={<Research />} />
        <Route path="medications" element={<Medication />} />
      </Routes>
    </ThemeProvider>
  );
}
