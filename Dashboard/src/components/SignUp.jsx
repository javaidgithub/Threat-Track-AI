import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser
} from "react-icons/hi";
import backgroundVideo from "../assets/123.mp4";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Redirect after signup
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Sign-Up Form */}
      <div className="relative z-10 w-full max-w-md p-8 bg-black backdrop-blur-md rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleSignUp} className="space-y-5">
          {/* First and Last Name */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-white font-medium mb-1">
                First Name
              </label>
              <div className="relative">
                <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={20} />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="First"
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-white font-medium mb-1">
                Last Name
              </label>
              <div className="relative">
                <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={20} />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Last"
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white font-medium mb-1">
              Email
            </label>
            <div className="relative">
              <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={20} />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-white font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={20} />
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-white font-medium mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={20} />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-white/30 text-white font-semibold py-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Redirect */}
        <p className="text-sm text-white mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold hover:underline text-white">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
