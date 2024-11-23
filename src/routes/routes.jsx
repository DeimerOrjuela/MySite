import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../containers/pages/Home";
import AboutUS from "../containers/pages/AboutUS";
import Projects from "../containers/pages/Projects";
import Stack from "../containers/pages/Stack";
import Contact from "../containers/pages/Contact";

function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUS" element={<AboutUS />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Stack" element={<Stack />} />
    </Routes>
  );
}

export default Approutes;
