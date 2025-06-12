import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { BellIcon, CpuIcon, Upload, GlobeIcon, LayoutDashboard as DashboardIcon, List, Bell, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";


const data = [
  { name: "192.168.1.1", hits: 320 },
  { name: "172.16.0.5", hits: 280 },
  { name: "10.0.0.3", hits: 150 },
];

const Dashboard = () => {

  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: <DashboardIcon />, label: "Dashboard" },
    { icon: <List />, label: "Logs" },
    { icon: <Upload />, label: "Upload logs" },
    { icon: <Bell />, label: "Alerts" },
    { icon: <Settings />, label: "Settings" },
    { icon: <User />, label: "Profile" },
  ];

  return (
    <div className="flex min-h-screen bg-Purple-500">
      {/* Sidebar */}
      <div
        className={`bg-purple-400 text-white p-4 flex flex-col transition-width duration-300 ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mb-6 p-2 bg-purple-700 rounded-md hover:bg-purple-600 self-end"
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? "=" : "="}
        </button>

        <nav className="flex flex-col gap-4">
          {menuItems.map(({ icon, label }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 cursor-pointer hover:bg-purple-900 p-2 rounded-md"
            >
              <div className="w-6 h-6">{icon}</div>
              {isSidebarOpen && <span className="whitespace-nowrap">{label}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Log Analysis Dashboard</h1>
          <button
      onClick={() => navigate("/")}  // replace "/landing" with your actual landing page route
      className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-purple-400 transition"
    >
      Landing Page
    </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-3">
              <CpuIcon className="text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-700">Log Summary</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Total logs analyzed: <span className="font-bold text-gray-800">1,234</span>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
  <h2 className="text-xl font-semibold text-gray-700 mb-4">User Activity</h2>
  <ul className="text-sm text-gray-600 space-y-1">
    <li>🟢 Logged in - 5 mins ago</li>
    <li>📁 Uploaded logs - 30 mins ago</li>
    <li>⚠️ Alert viewed - 1 hour ago</li>
  </ul>
</div>

<div className="bg-white rounded-2xl shadow-lg p-6">
  <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Uploads</h2>
  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
    <li>access_log_17May.log</li>
    <li>security_report_april.csv</li>
    <li>firewall_dump.json</li>
  </ul>
</div>

<div className="bg-white rounded-2xl shadow-lg p-6">
  <h2 className="text-xl font-semibold text-gray-700 mb-4">System Health</h2>
  <div className="space-y-2 text-sm text-gray-700">
    <p>CPU Usage: <span className="font-semibold text-indigo-600">45%</span></p>
    <p>Memory Usage: <span className="font-semibold text-indigo-600">3.2 GB / 8 GB</span></p>
    <p>Disk Space: <span className="font-semibold text-indigo-600">120 GB free</span></p>
  </div>
</div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-3">
              <GlobeIcon className="text-green-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-700">Most Frequent IPs</h2>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#4B5563" />
                <YAxis stroke="#4B5563" />
                <Tooltip />
                <Bar dataKey="hits" fill="#6366F1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-3">
              <BellIcon className="text-red-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-700">Recent Alerts</h2>
            </div>
            <ul className="text-sm text-red-600 list-disc list-inside space-y-1">
              <li>Unauthorized login attempt</li>
              <li>Spike in 404 errors</li>
              <li>SQL injection detected</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
