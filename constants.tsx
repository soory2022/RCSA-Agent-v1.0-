
import React from 'react';
import { 
  LayoutDashboard, 
  ShieldAlert, 
  FileText, 
  Settings, 
  Users, 
  Activity,
  History,
  MessageSquare
} from 'lucide-react';

export const COLORS = {
  primary: '#f97316', // Orange
  background: '#0c0c0e',
  card: '#161618',
  sidebar: '#111113',
  border: '#2a2a2c',
  textMuted: '#94a3b8',
  riskLevels: {
    VERY_LOW: '#22c55e',
    LOW: '#84cc16',
    MEDIUM: '#eab308',
    HIGH: '#f97316',
    VERY_HIGH: '#ef4444',
    CRITICAL: '#b91c1c'
  }
};

export const NAVIGATION = [
  { name: 'Dashboard', icon: <LayoutDashboard size={20} />, id: 'dashboard' },
  { name: 'Risk Registry', icon: <ShieldAlert size={20} />, id: 'registry' },
  { name: 'Assessments', icon: <Activity size={20} />, id: 'assessments' },
  { name: 'Audit Trail', icon: <History size={20} />, id: 'audit' },
  { name: 'Departments', icon: <Users size={20} />, id: 'departments' },
  { name: 'SOP Documentation', icon: <FileText size={20} />, id: 'sop' },
  { name: 'Settings', icon: <Settings size={20} />, id: 'settings' },
];

export const WORKSPACES = [
  { name: 'Financial Risk', color: '#f97316' },
  { name: 'Operational Risk', color: '#eab308' },
  { name: 'IT & Security', color: '#22c55e' },
  { name: 'Legal/Compliance', color: '#3b82f6' },
];
