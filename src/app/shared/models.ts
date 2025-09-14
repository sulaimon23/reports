export type RiskLevel = 'Critical' | 'High' | 'Medium' | 'Low';

export interface InfoCard {
  header: string;
  title: string;
  subtitle: string;
  content: string;
  description?: string;
}

export interface Asset {
  id: string;
  name: string;
  ipAddress: string;
  riskLevel: RiskLevel;
  status: 'active' | 'inactive';
  icon: string;
}

export interface BadgeData {
  text: string;
  variant: 'yellow' | 'green' | 'purple' | 'blue';
  className?: string;
}

export interface RowConfig {
  hasIcon?: boolean;
  label?: string;
  badges: BadgeData[];
  trailingText?: string;
}

export interface FrameConfig {
  frameId: string;
  title: string;
  subtitle?: string;
  iconSrc: string;
  rows: RowConfig[];
}
