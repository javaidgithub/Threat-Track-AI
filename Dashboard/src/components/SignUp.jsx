import React, { useState } from "react";
import { Router } from "react-router-dom"; // Make sure this is at the top
import myImage from "../assets/CC.png";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Signup successful!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      
      {/* Left Panel */}
      <div className="flex flex-col items-center justify-center p-10 text-centerbg-gradient-to-br from-blue-50 via-purple-100 to-pink-50">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Welcome!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Join us to analyze logs, view dashboards, and get insights.
        </p>
        <img
          src={myImage}
          alt="Dashboard Illustration"
          className="w-4/5 max-w-md"
        />
      </div>

      {/* Right Panel (Signup Form) */}
      <div className="flex items-center justify-center p-8bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200 rounded-l-3xl shadow-xl">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            SignUp To Threat-Track-AI
          </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
               Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder=""
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder=""
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder=""
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder=""
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default SignupPage;
