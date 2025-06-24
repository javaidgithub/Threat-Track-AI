import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

const [openIndex, setOpenIndex] = React.useState(null);

const toggle = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Threat Track AI</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#tech" className="hover:text-blue-600">Technology</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <Link
  to="/login"
  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
>
  Get Started
</Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none text-2xl">
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 border-t">
            <a href="#features" className="block hover:text-blue-600">Features</a>
            <a href="#tech" className="block hover:text-blue-600">Technology</a>
            <a href="#contact" className="block hover:text-blue-600">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Secure. Smart. Local.</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          AI-powered log analysis with meaningful insights right on your system.
        </p>
        
      </section>

<section className="bg-white py-16">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
      Common Threat Detection Challenges
    </h2>
    <p className="text-gray-600 text-center mb-12">
      Traditional security tools often fall short when it comes to detecting and responding to modern cyber threats.
    </p>

    <div className="relative border-l-4 border-red-500 pl-6">
      {/* Timeline Item 1 */}
      <div className="mb-12 pl-4 relative">
        <span className="absolute -left-5 top-1 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></span>
        <h3 className="text-xl font-semibold text-gray-800">Missed Threats</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Many systems fail to catch sophisticated or zero-day attacks buried in complex logs.
        </p>
      </div>

      {/* Timeline Item 2 */}
      <div className="mb-12 pl-4 relative">
        <span className="absolute -left-5 top-1 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></span>
        <h3 className="text-xl font-semibold text-gray-800">Slow Responses</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Delayed detection means more damage before action can be taken.
        </p>
      </div>

      {/* Timeline Item 3 */}
      <div className="pl-4 relative">
        <span className="absolute -left-5 top-1 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></span>
        <h3 className="text-xl font-semibold text-gray-800">Alert Fatigue</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Too many false positives make it hard to focus on real threats.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Why Old Tools Don’t Work</h2>
    
    <div className="grid gap-8 md:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 group">
        <div className="flex items-center mb-4">
          <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3 group-hover:bg-red-600 group-hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h6a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM14 4h6a1 1 0 011 1v5a1 1 0 01-1 1h-6M14 15h6a1 1 0 011 1v3a1 1 0 01-1 1h-6" />
            </svg>
          </div>
          <h4 className="text-lg font-semibold">Cloud Dependency</h4>
        </div>
        <p className="text-gray-600">
          Most tools rely on cloud access, increasing cost and data privacy risks.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 group">
        <div className="flex items-center mb-4">
          <div className="bg-yellow-100 text-yellow-600 rounded-full p-2 mr-3 group-hover:bg-yellow-600 group-hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20h.01" />
            </svg>
          </div>
          <h4 className="text-lg font-semibold">Too Many Alerts</h4>
        </div>
        <p className="text-gray-600">
          Flood of false positives overwhelms teams and leads to real threats being ignored.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 group">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3 group-hover:bg-blue-600 group-hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L15 12 9.75 7" />
            </svg>
          </div>
          <h4 className="text-lg font-semibold">Scattered Tools</h4>
        </div>
        <p className="text-gray-600">
          Managing multiple dashboards slows down response and increases confusion.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Technology Section */}
      <section id="tech" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-10">What Makes Threat Track AI Better?</h3>
          <ul className="grid md:grid-cols-2 gap-8 text-left">
            <li>
  <h4 className="font-medium text-lg mb-1 flex items-center">
    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Real-time Monitoring
  </h4>
  <p className="text-gray-600">Track logs as they happen for immediate threat response.</p>
</li>

<li>
  <h4 className="font-medium text-lg mb-1 flex items-center">
    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    AI-Powered Sorting
  </h4>
  <p className="text-gray-600">LLMs detect patterns, categorize logs, and surface real issues.</p>
</li>

<li>
  <h4 className="font-medium text-lg mb-1 flex items-center">
    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
    Runs Locally
  </h4>
  <p className="text-gray-600">No internet? No problem. Everything works offline too.</p>
</li>

<li>
  <h4 className="font-medium text-lg mb-1 flex items-center">
    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
    Simple Dashboards
  </h4>
  <p className="text-gray-600">Visualize logs and alerts without overwhelming complexity.</p>
</li>
          </ul>
        </div>
      </section>

     <div className="container mx-auto px-4 py-12">
  <div className="flex flex-wrap justify-center gap-6">
    {/* Endpoint Security Card */}
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">
      <h3 className="text-xl font-semibold mb-4">Endpoint Security</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Configuration Assessment</li>
        <li>Malware Detection</li>
        <li>File Integrity Monitoring</li>
      </ul>
    </div>

    {/* Threat Intelligence Card */}
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">
      <h3 className="text-xl font-semibold mb-4">Threat Intelligence</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Threat Hunting</li>
        <li>Log Data Analysis</li>
        <li>Vulnerability Detection</li>
      </ul>
    </div>

    {/* Security Operations Card */}
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">
      <h3 className="text-xl font-semibold mb-4">Security Operations</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Incident Response</li>
        <li>Regulatory Compliance</li>
        <li>IT Hygiene</li>
      </ul>
    </div>

    {/* Cloud Security Card */}
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">
      <h3 className="text-xl font-semibold mb-4">Cloud Security</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Container Security</li>
        <li>Posture Management</li>
        <li>Workload Protection</li>
      </ul>
    </div>
  </div>
</div> 


<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {/* Review 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-80">
        <div className="flex items-center mb-4">
          
          <div>
            <h4 className="font-semibold">Sarah Khan</h4>
            <p className="text-sm text-gray-500">Marketing Director</p>
          </div>
        </div>
        <p className="text-gray-700 italic">"This service has completely transformed our security infrastructure. Reliable, fast, and professional!"</p>
        <div className="mt-4 flex text-yellow-500">
          <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
        </div>
      </div>

      {/* Review 2 */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-80">
        <div className="flex items-center mb-4">
          <div>
            <h4 className="font-semibold">Hanzala Ahmad</h4>
            <p className="text-sm text-gray-500">IT Manager</p>
          </div>
        </div>
        <p className="text-gray-700 italic">"Outstanding support and proactive threat detection. A must-have for any enterprise looking to secure their systems."</p>
        <div className="mt-4 flex text-yellow-500">
          <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
        </div>
      </div>

      {/* Review 3 */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-80">
        <div className="flex items-center mb-4">
          <div>
            <h4 className="font-semibold">Alizeh Zehra</h4>
            <p className="text-sm text-gray-500">CTO</p>
          </div>
        </div>
        <p className="text-gray-700 italic">"The team's expertise and quick response times have made a huge difference in our cloud security posture."</p>
        <div className="mt-4 flex text-yellow-500">
          <span>⭐</span><span>⭐</span><span>⭐</span>
        </div>
      </div>
    </div>
  </div>
</section>





<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
    
    <div className="max-w-3xl mx-auto space-y-4">
      {/* FAQ Item 1 */}
      <div className="border rounded-lg overflow-hidden">
        <button 
          className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
          onClick={() => toggle(0)}
        >
          <span className="font-medium">What services do you offer?</span>
          <span className={`transform transition-transform duration-300 ${openIndex === 0 ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {openIndex === 0 && (
          <div className="p-5 bg-white border-t animate-fadeIn">
            <p className="text-gray-600">
              We offer a wide range of cybersecurity services including endpoint security, threat intelligence, cloud security, incident response, and more.
            </p>
          </div>
        )}
      </div>

      {/* FAQ Item 2 */}
      <div className="border rounded-lg overflow-hidden">
        <button 
          className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
          onClick={() => toggle(1)}
        >
          <span className="font-medium">How secure is your system?</span>
          <span className={`transform transition-transform duration-300 ${openIndex === 1 ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {openIndex === 1 && (
          <div className="p-5 bg-white border-t animate-fadeIn">
            <p className="text-gray-600">
              Our systems are built with enterprise-grade encryption, regular audits, and real-time monitoring to ensure maximum protection for your data.
            </p>
          </div>
        )}
      </div>

      {/* FAQ Item 3 */}
      <div className="border rounded-lg overflow-hidden">
        <button 
          className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
          onClick={() => toggle(2)}
        >
          <span className="font-medium">Do you provide support after implementation?</span>
          <span className={`transform transition-transform duration-300 ${openIndex === 2 ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {openIndex === 2 && (
          <div className="p-5 bg-white border-t animate-fadeIn">
            <p className="text-gray-600">
              Yes, we provide 24/7 customer support and post-implementation maintenance to ensure your systems remain secure and up-to-date.
            </p>
          </div>
        )}
      </div>

      {/* FAQ Item 4 */}
      <div className="border rounded-lg overflow-hidden">
        <button 
          className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
          onClick={() => toggle(3)}
        >
          <span className="font-medium">Can I customize the security plan?</span>
          <span className={`transform transition-transform duration-300 ${openIndex === 3 ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {openIndex === 3 && (
          <div className="p-5 bg-white border-t animate-fadeIn">
            <p className="text-gray-600">
              Absolutely! We tailor our security solutions based on your business size, industry needs, and compliance requirements.
            </p>
          </div>
        )}
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out forwards;
    }
  `}</style>
</section>


      {/* Footer / Contact */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
      {/* Brand Column */}
      <div>
        <h3 className="text-xl font-bold mb-4">ThreatTrack</h3>
        <p className="text-gray-400 mb-4">
          Providing top-tier cybersecurity solutions to protect your digital assets.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195A4.92 4.92 0 0016.27 3a4.935 4.935 0 00-4.69 3.41c-.383.073-.762.125-1.15.153A13.946 13.946 0 011.4 2.2a4.943 4.943 0 001.523 6.573A4.93 4.93 0 012 4.75a4.93 4.93 0 004.62 3.42 9.863 9.863 0 01-6.1 2.11A5.01 5.01 0 006.34 15c-2.03 1.58-4.6 2.2-7.1 1.94a14.05 14.05 0 007.59 2.23c9.14 0 14.36-7.58 14.36-14.36 0-.22 0-.43-.01-.64A10.08 10.08 0 0024 4.61z"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition">Home</a></li>
          <li><a href="#" className="hover:text-white transition">Services</a></li>
          <li><a href="#" className="hover:text-white transition">Pricing</a></li>
          <li><a href="#" className="hover:text-white transition">About Us</a></li>
          <li><a href="#" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            911 Secure St, I-14, ISB
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            User@Threat.com
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            +92 3558284988
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
        <p className="text-gray-400 mb-4">Stay updated with the latest in cybersecurity trends.</p>
        <form className="flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Your email" 
            className="px-4 py-2 rounded-md text-gray-900 focus:outline-none"
            required 
          />
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} ThreatTrack. All rights reserved.
    </div>
  </div>
</footer>
    </div>
  );
}
