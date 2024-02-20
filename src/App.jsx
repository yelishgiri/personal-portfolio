import { useState } from "react";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

function App() {
  return (
    <main>
      <About />
      <Navbar />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
