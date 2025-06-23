import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import backgroundVideo from "../assets/123.mp4";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
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

      {/* Sign-In Form */}
      <div className="relative z-10 w-full max-w-md p-8 bg-black backdrop-blur-md rounded-2xl shadow-2xl border border-white/30">
        <h1 className="text-3xl font-bold text-center text-white mb-6 font-sans tracking-wide">
          Threat-Track-AI
        </h1>

        <form onSubmit={handleSignIn} className="space-y-5">
          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Forgot Password */}
          <div className="flex justify-end text-sm">
            <a href="#" className="text-white hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-white/30 text-white font-semibold py-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-sm text-white mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold hover:underline text-white">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
