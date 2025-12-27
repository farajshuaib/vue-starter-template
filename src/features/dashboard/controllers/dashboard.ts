import { defineStore } from "pinia";
import { ServiceProvider } from "di-injectable";
import { computed, ref } from "vue";
import type {
  DashboardActivity,
  DashboardStat,
  DashboardSummary,
  DashboardTask,
  DashboardTaskStatus,
  DashboardTeamLoad,
} from "../models/dashboard";
import DashboardService from "../services/dashboard";

type DashboardFilter = DashboardTaskStatus | "all";

export const useDashboardStore = defineStore("dashboardStore", () => {
  const service = new ServiceProvider().resolve<DashboardService>(
    DashboardService
  );

  const stats = ref<DashboardStat[]>([]);
  const tasks = ref<DashboardTask[]>([]);
  const activity = ref<DashboardActivity[]>([]);
  const teamLoad = ref<DashboardTeamLoad[]>([]);
  const filter = ref<DashboardFilter>("active");
  const loading = ref(false);
  const error = ref<string | null>(null);
  const lastSyncedAt = ref<Date | null>(null);

  const filteredTasks = computed(() => {
    if (filter.value === "all") {
      return tasks.value;
    }

    return tasks.value.filter((task) => task.status === filter.value);
  });

  const completionRate = computed(() => {
    if (!tasks.value.length) {
      return 0;
    }

    const completed = tasks.value.filter(
      (task) => task.status === "done"
    ).length;
    return Math.round((completed / tasks.value.length) * 100);
  });

  const activeInitiatives = computed(() =>
    tasks.value.filter((task) => task.status !== "done").length
  );

  const hydrateDashboard = (payload: DashboardSummary) => {
    stats.value = payload.stats;
    tasks.value = payload.tasks;
    activity.value = payload.activity;
    teamLoad.value = payload.team;
    lastSyncedAt.value = new Date();
  };

  const fetchSummary = async () => {
    loading.value = true;
    error.value = null;

    try {
      const { data } = await service.fetchSummary();
      hydrateDashboard(data);
    } catch (err) {
      error.value = "Unable to load the dashboard snapshot.";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    stats,
    tasks,
    activity,
    teamLoad,
    filter,
    filteredTasks,
    loading,
    error,
    completionRate,
    activeInitiatives,
    lastSyncedAt,
    fetchSummary,
  };
});
