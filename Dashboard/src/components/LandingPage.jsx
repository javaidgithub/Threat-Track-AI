// src/components/LandingPage.jsx

import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-purple-100 to-blue-50 px-4 text-center">
      <h1 className="text-5xl font-bold text-purple-700 mb-4">Welcome to Our Website</h1>
      <p className="text-lg text-gray-600 mb-8">Sign up or log in to get started</p>

      <div className="space-x-4">
        <Link to="/signup" className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
          Sign Up
        </Link>
        <Link to="/login" className="border border-purple-600 text-purple-600 px-6 py-2 rounded-md hover:bg-purple-600 hover:text-white">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
