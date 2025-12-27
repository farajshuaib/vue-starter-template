export type DashboardTrend = "up" | "down";

export interface DashboardStat {
  id: string;
  label: string;
  value: number;
  change: number;
  trend: DashboardTrend;
  description: string;
}

export type DashboardTaskStatus = "active" | "blocked" | "upcoming" | "done";

export interface DashboardTask {
  id: number;
  name: string;
  owner: string;
  status: DashboardTaskStatus;
  due: string;
  progress: number;
  priority: "low" | "medium" | "high";
}

export interface DashboardActivity {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  category: "deploy" | "insight" | "incident" | "people";
}

export interface DashboardTeamLoad {
  id: number;
  name: string;
  focus: string;
  load: number;
  members: number;
}

export interface DashboardSummary {
  stats: DashboardStat[];
  tasks: DashboardTask[];
  activity: DashboardActivity[];
  team: DashboardTeamLoad[];
}
