import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import SignupPage from "./components/SignUp";
import SignInPage from "./components/SignIn";
import LandingPage from "./components/LandingPage"; 
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* Optional: Default route */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
