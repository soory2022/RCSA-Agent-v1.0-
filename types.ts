
export enum RiskLevel {
  VERY_LOW = 'Very Low',
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  VERY_HIGH = 'Very High',
  CRITICAL = 'Critical'
}

export interface Risk {
  id: string;
  risk_serial: string;
  title: string;
  description: string;
  type: string;
  department: string;
  likelihood: number;
  impact: number;
  score: number;
  level: RiskLevel;
  status: 'Open' | 'Mitigated' | 'At Risk';
  owner: string;
  createdAt: string;
  source_doc?: string;
}

export interface SystemStatus {
  ollama: boolean;
  groq: boolean;
  supabase: boolean;
  googleDrive: boolean;
  gmail: boolean;
}

export interface DashboardStats {
  activeRisks: number;
  mitigationRate: number;
  highSeverityCount: number;
  pendingReviews: number;
}
