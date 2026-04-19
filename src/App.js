import React from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <header className="navbar">
          <div className="brand">Jandhyala Dhanya</div>
          <nav className="nav-links">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Projects
            </NavLink>
          </nav>
        </header>

        <main className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
