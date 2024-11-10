// src/App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />  {/* Homepage is Onboarding */}
        <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page */}
      </Routes>
    </Router>
  );
}

export default App;
