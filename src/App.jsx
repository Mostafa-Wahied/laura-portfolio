import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import PathwaysPage from "./pages/PathwaysPage";
import AboutPage from "./pages/AboutPage";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio/pathways" element={<PathwaysPage />} />

        {/* <Route path="/portfolio/:slug" element={<ProjectsPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
