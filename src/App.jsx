import { useState } from "react";

import About from "./components/About.jsx";

import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import "./App.css";

function App() {
  const [switchComponents, setSwitchComponents] = useState(0);

  return <Home />;
}

export default App;
