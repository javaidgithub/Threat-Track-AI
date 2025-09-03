import React, { useState, useEffect } from 'react';

export default function App() {
  // State management
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedLog, setSelectedLog] = useState(null);
  const [anomalies, setAnomalies] = useState(27);
  const [criticalAlerts, setCriticalAlerts] = useState(3);
  const [logs, setLogs] = useState([]);
  const [responseActions, setResponseActions] = useState([]);
  const [perplexity, setPerplexity] = useState(72);

  // Simulated real-time log stream
  useEffect(() => {
    const logTypes = ['INFO', 'WARNING', 'CRITICAL'];
    const sources = ['auth', 'network', 'app', 'db', 'firewall'];
    const messages = [
      'Successful login',
      'Failed login attempt',
      'Unauthorized access',
      'High CPU usage',
      'Disk space low',
      'Suspicious pattern detected'
    ];
    const interval = setInterval(() => {
      const newLog = {
        timestamp: new Date().toLocaleTimeString(),
        source: sources[Math.floor(Math.random() * sources.length)],
        message: messages[Math.floor(Math.random() * messages.length)],
        severity: logTypes[Math.floor(Math.random() * logTypes.length)],
        id: Date.now() + Math.random()
      };
      setLogs(prev => [newLog, ...prev.slice(0, 49)]);
      // Randomly generate anomalies
      if (Math.random() < 0.2) {
        setAnomalies(prev => prev + 1);
        if (newLog.severity === 'CRITICAL') {
          setCriticalAlerts(prev => prev + 1);
        }
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Simulated response actions
  useEffect(() => {
    const actions = ['Blocked IP', 'Quarantined File', 'Alerted Admin', 'Isolated Device'];
    const statuses = ['Completed', 'In Progress', 'Pending'];
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const action = {
          action: actions[Math.floor(Math.random() * actions.length)],
          trigger: 'Suspicious activity detected',
          status: statuses[Math.floor(Math.random() * statuses.length)],
          timestamp: new Date().toLocaleTimeString()
        };
        setResponseActions(prev => [action, ...prev.slice(0, 4)]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Layout */}
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={`${
            sidebarOpen ? 'w-64' : 'w-16'
          } bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100">
              {sidebarOpen && (
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="ml-2 text-blue-600 font-bold">ThreatTrack</span>
                </div>
              )}
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-500 hover:text-blue-600"
              >
                {sidebarOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Dashboard'
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  label: 'Real-Time Logs'
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  ),
                  label: 'Anomaly Detection'
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 15h.01M7 11h.01M12 7h.01M12 15h.01M12 11h.01M17 7h.01M17 15h.01M17 11h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: 'Classifications'
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  label: 'Responses'
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Settings'
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center p-2 rounded-lg text-sm ${
                    index === 0 ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  <div className="mr-2">{item.icon}</div>
                  {sidebarOpen && <span>{item.label}</span>}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Header */}
          <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 shadow-sm">
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-500 text-sm">
                {new Date().toLocaleDateString()}
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-sm text-gray-600">System: Operational</span>
              </div>
              <button className="p-1 rounded-full hover:bg-gray-100">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="flex items-center">
                <img 
                  src="https://picsum.photos/200/200?random=1" 
                  alt="User avatar"
                  className="h-8 w-8 rounded-full object-cover border border-gray-300"
                />
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 overflow-auto p-4 md:p-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[
                {
                  title: 'Total Logs Today',
                  value: logs.length * 10,
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  color: 'text-blue-600'
                },
                {
                  title: 'Anomalies Detected',
                  value: anomalies,
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  ),
                  color: 'text-yellow-500'
                },
                {
                  title: 'Critical Alerts',
                  value: criticalAlerts,
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: 'text-red-500'
                },
                {
                  title: 'Responses Triggered',
                  value: responseActions.length,
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  color: 'text-green-500'
                }
              ].map((card, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className={`mr-3 ${card.color}`}>
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{card.title}</p>
                      <p className="text-2xl font-bold">{card.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Real-Time Log Stream */}
              <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-semibold">Real-Time Log Stream</h2>
                  <div className="flex space-x-2">
                    <select className="bg-gray-50 text-sm rounded px-2 py-1 border border-gray-300">
                      <option>Filter by severity</option>
                      <option>Info</option>
                      <option>Warning</option>
                      <option>Critical</option>
                    </select>
                  </div>
                </div>
                <div className="overflow-auto max-h-96">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs text-gray-500 font-medium">Timestamp</th>
                        <th className="px-4 py-2 text-left text-xs text-gray-500 font-medium">Source</th>
                        <th className="px-4 py-2 text-left text-xs text-gray-500 font-medium">Message</th>
                        <th className="px-4 py-2 text-left text-xs text-gray-500 font-medium">Severity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {logs.map(log => (
                        <tr 
                          key={log.id}
                          onClick={() => setSelectedLog(log)}
                          className={`cursor-pointer hover:bg-blue-50 ${
                            log.severity === 'CRITICAL' ? 'bg-red-50' : 
                            log.severity === 'WARNING' ? 'bg-yellow-50' : ''
                          }`}
                        >
                          <td className="px-4 py-2 text-xs text-gray-600">{log.timestamp}</td>
                          <td className="px-4 py-2 text-xs text-gray-600">{log.source}</td>
                          <td className="px-4 py-2 text-xs text-gray-600 truncate max-w-xs">{log.message}</td>
                          <td className="px-4 py-2 text-xs">
                            <span className={`px-2 py-1 rounded text-xs ${
                              log.severity === 'CRITICAL' ? 'bg-red-100 text-red-800' :
                              log.severity === 'WARNING' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {log.severity}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Panel Widgets */}
              <div className="space-y-4">
                {/* Anomaly Heatmap */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <h2 className="font-semibold mb-4">Anomaly Timeline</h2>
                  <div className="h-32 relative">
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="border-b border-gray-100 h-0"></div>
                      ))}
                    </div>
                    {/* Simulated anomaly points */}
                    <div className="absolute inset-0 flex items-end space-x-1">
                      {[12, 8, 15, 6, 20, 10, 8, 14, 5, 9, 7, 13].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col-reverse">
                          <div 
                            className={`w-full rounded-t bg-gradient-to-t from-red-500 to-red-300 opacity-80`}
                            style={{ height: `${Math.min(height * 2, 100)}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Sources */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <h2 className="font-semibold mb-4">Top Anomaly Sources</h2>
                  <div className="space-y-3">
                    {['192.168.1.101', '10.0.0.45', 'auth-server', '172.16.2.33'].map((source, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-1/4 text-sm text-gray-600">{source}</div>
                        <div className="flex-1 h-2 bg-gray-100 rounded overflow-hidden">
                          <div 
                            className="h-full rounded bg-blue-500"
                            style={{ width: `${(4 - i) * 20}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Perplexity Tracker */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="flex justify-between mb-2">
                    <h2 className="font-semibold">Perplexity Score</h2>
                    <span className="font-mono text-blue-600">{perplexity}</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-1/3">
                        <div className="text-xs text-gray-500">Low</div>
                      </div>
                      <div className="w-1/3 text-center">
                        <div className="text-xs text-gray-500">Normal</div>
                      </div>
                      <div className="w-1/3 text-right">
                        <div className="text-xs text-gray-500">High</div>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded">
                      <div 
                        className="h-full rounded bg-gradient-to-r from-green-400 to-yellow-400"
                        style={{ width: `${perplexity * 0.9}%` }}
                      ></div>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={perplexity}
                      onChange={(e) => setPerplexity(parseInt(e.target.value))}
                      className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CrewAI Response Panel */}
            <div className="mt-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold">CrewAI Response Actions</h2>
              </div>
              <div className="overflow-auto max-h-48">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs text-gray-500 font-medium">Action</th>
                      <th className="px-4 py-2 text-left text-xs text-gray-500 font-medium">Trigger</th>
                      <th className="px-4 py-2 text-left text-xs text-gray-500 font-medium">Status</th>
                      <th className="px-4 py-2 text-left text-xs text-gray-500 font-medium">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {responseActions.map((action, index) => (
                      <tr key={index} className="hover:bg-blue-50">
                        <td className="px-4 py-2 text-xs text-gray-600">{action.action}</td>
                        <td className="px-4 py-2 text-xs text-gray-600 truncate max-w-xs">{action.trigger}</td>
                        <td className="px-4 py-2 text-xs">
                          <span className={`px-2 py-1 rounded text-xs ${
                            action.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            action.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {action.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-xs text-gray-600">{action.timestamp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Log Details Drawer */}
      {selectedLog && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 bg-gray-600 bg-opacity-50 transition-opacity"
              onClick={() => setSelectedLog(null)}
            ></div>
            <section className="absolute inset-y-0 right-0 max-w-full flex">
              <div className="relative w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl">
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-lg font-medium">Log Details</h2>
                    <button 
                      onClick={() => setSelectedLog(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-6 overflow-y-auto">
                    <div className="mb-4">
                      <label className="block text-sm text-gray-500 mb-1">Raw Log</label>
                      <div className="bg-gray-50 p-3 rounded text-sm font-mono overflow-auto max-h-40">
                        {JSON.stringify(selectedLog, null, 2)}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm text-gray-500 mb-1">AI Classification</label>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        selectedLog.severity === 'CRITICAL' ? 'bg-red-100 text-red-800' :
                        selectedLog.severity === 'WARNING' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {selectedLog.severity} Threat
                      </span>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm text-gray-500 mb-1">Suggested Resolution</label>
                      <p className="text-sm text-gray-600">
                        {selectedLog.severity === 'CRITICAL' ? 'Block source IP and initiate full system scan' :
                         selectedLog.severity === 'WARNING' ? 'Monitor source and increase logging verbosity' :
                         'No immediate action required'}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                        Mark as Resolved
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors">
                        False Positive
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}