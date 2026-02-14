
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  Users,
  ArrowUpRight,
  ChevronRight,
  MoreVertical
} from 'lucide-react';
import { COLORS } from '../constants';
import RiskMatrix from './RiskMatrix';

const stats = [
  { label: 'Active Risks', value: '42', change: '+3 this week', icon: <ShieldAlert className="text-orange-500" /> },
  { label: 'Mitigated Rate', value: '86%', change: '67% completion', icon: <CheckCircle2 className="text-green-500" /> },
  { label: 'Pending Reviews', value: '10', change: '5 due today', icon: <Clock className="text-yellow-500" /> },
  { label: 'Risk Officers', value: '24', change: '3 online now', icon: <Users className="text-blue-500" /> },
];

const mockPieData = [
  { name: 'Completed', value: 86 },
  { name: 'Pending', value: 14 },
];

const mockBarData = [
  { name: 'Mon', risks: 4 },
  { name: 'Tue', risks: 7 },
  { name: 'Wed', risks: 5 },
  { name: 'Thu', risks: 8 },
  { name: 'Fri', risks: 12 },
  { name: 'Sat', risks: 3 },
  { name: 'Sun', risks: 2 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-slate-400 mt-1">Welcome back, Risk Officer. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/${i}/40/40`} 
                className="w-8 h-8 rounded-full border-2 border-[#0c0c0e]" 
                alt="avatar" 
              />
            ))}
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            Share Report <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#161618] p-6 rounded-2xl border border-[#2a2a2c] group hover:border-orange-500/50 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-black/40 rounded-xl">
                {stat.icon}
              </div>
              <button className="text-slate-500 hover:text-white">
                <MoreVertical size={18} />
              </button>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm font-medium text-slate-300">{stat.label}</p>
              <p className="text-xs text-slate-500">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="lg:col-span-2 bg-[#161618] p-6 rounded-2xl border border-[#2a2a2c]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Risk Detection Activity</h3>
            <select className="bg-transparent text-xs text-slate-400 border-none focus:ring-0 cursor-pointer">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockBarData}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#161618', borderColor: '#2a2a2c', borderRadius: '12px' }}
                  itemStyle={{ color: '#f97316' }}
                />
                <Bar 
                  dataKey="risks" 
                  fill="#f97316" 
                  radius={[6, 6, 0, 0]} 
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights / Donut */}
        <div className="bg-[#161618] p-6 rounded-2xl border border-[#2a2a2c] flex flex-col items-center justify-center relative">
          <div className="w-full flex justify-between items-center mb-4 absolute top-6 left-6 pr-12">
            <h3 className="text-lg font-semibold">Security Health</h3>
          </div>
          <div className="h-[250px] w-full flex items-center justify-center relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-4">
              <span className="text-4xl font-bold">86%</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Resilience</span>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                >
                  <Cell fill="#f97316" stroke="none" />
                  <Cell fill="#2a2a2c" stroke="none" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full grid grid-cols-2 gap-4 mt-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-xs text-slate-400">Mitigated</span>
              </div>
              <p className="text-sm font-bold">142 Items</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2a2a2c]" />
                <span className="text-xs text-slate-400">Active</span>
              </div>
              <p className="text-sm font-bold">24 Items</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Matrix and Recent Risks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <RiskMatrix />
        </div>
        
        <div className="lg:col-span-2 bg-[#161618] p-6 rounded-2xl border border-[#2a2a2c]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Recent High Risks</h3>
            <button className="text-sm text-orange-500 font-medium flex items-center gap-1 hover:underline">
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div className="space-y-4">
            {[
              { id: 'R-1024', title: 'Data Breach via Unpatched Server', dept: 'IT Infrastructure', score: 25, level: 'High' },
              { id: 'R-1025', title: 'Unauthorized API Access Attempt', dept: 'Security Ops', score: 18, level: 'High' },
              { id: 'R-1026', title: 'Phishing Campaign Detected', dept: 'Cybersecurity', score: 16, level: 'Medium' },
            ].map((risk, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-black/20 rounded-xl hover:bg-black/40 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${risk.score >= 20 ? 'bg-red-500/10 text-red-500' : 'bg-orange-500/10 text-orange-500'}`}>
                    <ShieldAlert size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm group-hover:text-orange-500 transition-colors">{risk.title}</h4>
                    <p className="text-xs text-slate-500">{risk.id} • {risk.dept}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">{risk.score}</div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Score</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
