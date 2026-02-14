
import React from 'react';
import { Search, MessageSquare, Plus } from 'lucide-react';
import { NAVIGATION, WORKSPACES } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#111113] border-r border-[#2a2a2c] flex flex-col h-screen shrink-0">
      {/* Brand */}
      <div className="p-8 pb-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white transform rotate-45" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">RCSA Agent</h1>
          <p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">Version 1.0</p>
        </div>
      </div>

      {/* Global Search/Quick Actions */}
      <div className="px-6 py-4 space-y-4">
        <div className="relative group">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500 group-focus-within:text-orange-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search risk records..." 
            className="w-full bg-[#1c1c1e] border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-600 text-white"
          />
        </div>
        <button className="w-full flex items-center gap-3 text-slate-400 hover:text-white px-3 py-2 text-sm transition-colors rounded-lg hover:bg-white/5">
          <MessageSquare size={18} className="text-slate-500" />
          Risk AI Chat
        </button>
      </div>

      {/* Primary Navigation */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-3 mb-2">Main Menu</div>
        {NAVIGATION.map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all ${
              item.id === 'dashboard' 
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}

        <div className="mt-8">
          <div className="flex justify-between items-center px-3 mb-2">
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Workspaces</span>
            <button className="text-slate-500 hover:text-white">
              <Plus size={14} />
            </button>
          </div>
          {WORKSPACES.map((space) => (
            <button
              key={space.name}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-xl hover:bg-white/5"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: space.color }} />
              {space.name}
            </button>
          ))}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-6 mt-auto">
        <div className="bg-[#1c1c1e] p-3 rounded-2xl border border-[#2a2a2c] flex items-center gap-3">
          <img src="https://picsum.photos/seed/risk/100/100" className="w-10 h-10 rounded-xl" alt="profile" />
          <div className="flex-1 min-w-0 text-left">
            <p className="text-sm font-bold truncate text-white">Risk Officer</p>
            <p className="text-[10px] text-slate-500 truncate">ro_admin@rcsa.ai</p>
          </div>
          <button className="text-slate-500 hover:text-white transition-colors">
            <div className="flex flex-col gap-0.5">
              <div className="w-1 h-1 bg-current rounded-full" />
              <div className="w-1 h-1 bg-current rounded-full" />
              <div className="w-1 h-1 bg-current rounded-full" />
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
