
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { COLORS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen w-full bg-[#0c0c0e] text-white overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar / Activity breadcrumb */}
        <header className="h-14 border-b border-[#2a2a2c] flex items-center justify-between px-8 bg-[#0c0c0e]/80 backdrop-blur-md z-10 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="hover:text-white cursor-pointer transition-colors">Main Console</span>
            <span>/</span>
            <span className="text-orange-500 font-medium">Global Dashboard</span>
            <span className="ml-4 flex items-center gap-1.5 text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full border border-green-500/20">
              <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
              AI Pipeline Online
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Last Polled</p>
              <p className="text-xs font-mono">2m 45s ago</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0c0c0e]" />
                <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#161618] border border-[#2a2a2c] text-slate-400 hover:text-white transition-all">
                   🔔
                </button>
              </div>
              <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors uppercase tracking-tight">
                New Scan
              </button>
            </div>
          </div>
        </header>

        {/* Content Views */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {activeTab === 'dashboard' && <Dashboard />}
          {/* Add other view components here */}
        </div>
      </main>
    </div>
  );
};

export default App;
