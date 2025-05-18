import backgroundImage from '../assets/bb.png';
import backgroundVideo from '../assets/123.mp4';
import { HiOutlineMail} from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";



export default function SignIn() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full max-w-md p-8 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30">
        <h2 className="text-2xl font-bold text-center text-black mb-6 font-sans">Threat-Track-AI</h2>
        <form>
  <div className="mb-4">
    <label htmlFor="email" className="block text-black font-medium mb-1">
      Email
    </label>
    <div className="relative">
    <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" size={20} />
    
    <input
      type="email"
      id="email"
      name="email"
      placeholder=""
      className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/60 backdrop-blur-md"
    />
    </div>
  </div>

  <div className="mb-6">
    <label htmlFor="password" className="block text-black font-medium mb-1">
      Password
    </label>
    <div className="relative">
    <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" size={20} />
    
    <input
      type="password"
      id="password"
      name="password"
      placeholder=""
      className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/60 backdrop-blur-md"
    />
    </div>
  </div>

  <div className="flex items-center justify-between mb-6">
    <a href="#" className="text-sm text-black hover:underline">
      Forgot password?
    </a>
  </div>

  <button
    type="submit"
    className="w-full bg-white/30 text-black font-semibold py-2 rounded-lg backdrop-blur-md hover:bg-white/50 transition"
  >
    Sign In
  </button>
</form>

<p className="text-sm text-white mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-white hover:underline">
          Sign up
        </Link>
      </p>

      </div>
    </div>
  );
}
