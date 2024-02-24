import { useState } from "react";

import About from "./components/About.jsx";

import Portfolio from "./components/Portfolio.jsx";
import Blogs from "./components/Blogs.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import "./App.css";

function App() {
  const [switchComponents, setSwitchComponents] = useState(0);

  return <About />;
}

export default App;
