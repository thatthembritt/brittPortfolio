import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Route path="/Home" element={<Search />} />
        <Route path="/Contact" element={<Search />} />
        <Route path="/Footer" element={<Search />} />
        <Route path="/Navbar" element={<Search />} />
        <Route path="/Projects" element={<Search />} />
      </div>
    </Router>
  );
}

export default App;
