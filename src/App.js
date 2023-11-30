import React from "react";
import "./styles.css";
import Home from "./routes/Home.js";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About.js";
import Service from "./routes/Service.js";
import Contact from "./routes/Contact.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
