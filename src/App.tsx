import React from "react";
import "./App.css";

import { RouteStore } from "./Routes";
import { BrowserRouter } from "react-router-dom"; // Provides history context which is needed at the time of Router

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <RouteStore />
    </BrowserRouter>
  );
}

export default App;
