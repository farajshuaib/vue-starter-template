<script setup lang="ts">
import { computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDashboardStore } from "@/features/dashboard/controllers/dashboard";
import type {
  DashboardStat,
  DashboardTask,
} from "@/features/dashboard/models/dashboard";
import { Button } from "@/core/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/core/components/ui/table";
import { Badge } from "@/core/components/ui/badge";
import { Skeleton } from "@/core/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/core/components/ui/alert";
import {
  ArrowDownRight,
  ArrowUpRight,
  RefreshCcw,
  Server,
  Lightbulb,
  AlertTriangle,
  UsersRound,
} from "lucide-vue-next";

const dashboard = useDashboardStore();
const {
  stats,
  filteredTasks,
  activity,
  teamLoad,
  loading,
  filter,
  completionRate,
  activeInitiatives,
  lastSyncedAt,
  error,
} = storeToRefs(dashboard);

const taskFilters = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "blocked", label: "Blocked" },
  { id: "upcoming", label: "Upcoming" },
  { id: "done", label: "Done" },
] as const;

const priorityTone: Record<DashboardTask["priority"], string> = {
  high: "bg-rose-500/10 text-rose-500",
  medium: "bg-amber-500/10 text-amber-600",
  low: "bg-emerald-500/10 text-emerald-600",
};

const statusTone: Record<DashboardTask["status"], string> = {
  active: "text-emerald-600 bg-emerald-500/10",
  blocked: "text-rose-500 bg-rose-500/10",
  upcoming: "text-sky-600 bg-sky-500/10",
  done: "text-muted-foreground bg-muted",
};

const statusCopy: Record<DashboardTask["status"], string> = {
  active: "Active",
  blocked: "Blocked",
  upcoming: "Upcoming",
  done: "Completed",
};

const activityIcons = {
  deploy: Server,
  insight: Lightbulb,
  incident: AlertTriangle,
  people: UsersRound,
} as const;

const formatStatValue = (stat: DashboardStat) => {
  if (stat.id === "retention") {
    return `${stat.value.toFixed(1)}%`;
  }

  if (stat.id === "netPromoter") {
    return stat.value.toString();
  }

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    notation: stat.value > 1000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(stat.value);
};

const formatTimeAgo = (timestamp: string) => {
  const delta = Date.now() - new Date(timestamp).getTime();
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (Math.abs(delta) < hour) {
    const minutes = Math.round(delta / minute);
    return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
      -minutes,
      "minute"
    );
  }

  if (Math.abs(delta) < day) {
    const hours = Math.round(delta / hour);
    return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
      -hours,
      "hour"
    );
  }

  const days = Math.round(delta / day);
  return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
    -days,
    "day"
  );
};

const formatDueDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(value));

const lastUpdated = computed(() => {
  if (!lastSyncedAt.value) {
    return "Awaiting initial sync";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(lastSyncedAt.value);
});

const refreshData = async () => {
  await dashboard.fetchSummary();
};

onMounted(() => {
  if (!stats.value.length) {
    dashboard.fetchSummary();
  }
});
</script>

<template>
  <div class="space-y-8">
    <section class="flex flex-col gap-4 rounded-2xl border bg-background p-6 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-sm text-muted-foreground">Latest sync</p>
          <p class="text-xl font-semibold">{{ lastUpdated }}</p>
        </div>
        <div class="flex items-center gap-3 text-sm text-muted-foreground">
          <div>
            Delivery health:
            <span class="font-semibold text-foreground">{{ completionRate }}% complete</span>
          </div>
          <span class="hidden text-muted-foreground lg:inline">•</span>
          <div class="flex items-center gap-1">
            <span>Active initiatives:</span>
            <span class="font-semibold text-foreground">{{ activeInitiatives }}</span>
          </div>
          <Button
            size="sm"
            class="gap-2"
            variant="outline"
            :disabled="loading"
            @click="refreshData"
          >
            <RefreshCcw class="h-4 w-4" :class="{ 'animate-spin': loading }" />
            {{ loading ? "Refreshing..." : "Refresh data" }}
          </Button>
        </div>
      </div>
      <Alert variant="destructive" v-if="error">
        <AlertTitle>Unable to update snapshot</AlertTitle>
        <AlertDescription>{{ error }}</AlertDescription>
      </Alert>
    </section>

    <section>
      <div v-if="!stats.length && loading" class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Skeleton v-for="index in 4" :key="index" class="h-32 rounded-2xl" />
      </div>
      <div
        v-else
        class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        :aria-busy="loading"
      >
        <article
          v-for="stat in stats"
          :key="stat.id"
          class="rounded-2xl border bg-background p-5 shadow-sm transition-all"
        >
          <p class="text-sm font-medium text-muted-foreground">{{ stat.label }}</p>
          <p class="mt-2 text-3xl font-semibold">{{ formatStatValue(stat) }}</p>
          <div class="mt-3 flex items-center gap-2 text-sm">
            <span
              class="flex items-center gap-1 font-medium"
              :class="stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-500'"
            >
              <component
                :is="stat.trend === 'up' ? ArrowUpRight : ArrowDownRight"
                class="h-4 w-4"
              />
              {{ Math.abs(stat.change).toFixed(1) }}%
            </span>
            <span class="text-muted-foreground">{{ stat.description }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-3">
      <article
        class="rounded-2xl border bg-background p-6 shadow-sm lg:col-span-2"
        :aria-busy="loading"
      >
        <header class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-lg font-semibold">Execution overview</p>
            <p class="text-sm text-muted-foreground">
              Track owner accountability and unblock the workstream.
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <Button
              v-for="option in taskFilters"
              :key="option.id"
              size="sm"
              :variant="filter === option.id ? 'default' : 'ghost'"
              class="rounded-full px-4"
              @click="filter = option.id"
            >
              {{ option.label }}
            </Button>
          </div>
        </header>

        <div class="mt-6">
          <div v-if="loading && !filteredTasks.length" class="space-y-2">
            <Skeleton v-for="index in 4" :key="`task-${index}`" class="h-12 rounded-xl" />
          </div>
          <div v-else>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Initiative</TableHead>
                  <TableHead class="hidden md:table-cell">Owner</TableHead>
                  <TableHead class="hidden lg:table-cell">Due</TableHead>
                  <TableHead class="hidden lg:table-cell">Priority</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="task in filteredTasks" :key="task.id">
                  <TableCell class="font-medium">
                    <p>{{ task.name }}</p>
                    <p class="text-xs text-muted-foreground">
                      {{ task.progress }}% complete
                    </p>
                    <div class="mt-2 h-2 rounded-full bg-muted">
                      <span
                        class="block h-full rounded-full bg-primary transition-all"
                        :style="{ width: `${task.progress}%` }"
                      />
                    </div>
                  </TableCell>
                  <TableCell class="hidden md:table-cell">
                    <Badge variant="outline">{{ task.owner }}</Badge>
                  </TableCell>
                  <TableCell class="hidden lg:table-cell">
                    {{ formatDueDate(task.due) }}
                  </TableCell>
                  <TableCell class="hidden lg:table-cell">
                    <Badge
                      class="rounded-full px-3 text-xs font-semibold"
                      :class="priorityTone[task.priority]"
                    >
                      {{ task.priority }}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      class="rounded-full px-3 text-xs font-semibold capitalize"
                      :class="statusTone[task.status]"
                    >
                      {{ statusCopy[task.status] }}
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p v-if="!loading && !filteredTasks.length" class="py-10 text-center text-sm text-muted-foreground">
              Nothing to show for this filter yet.
            </p>
          </div>
        </div>
      </article>

      <div class="space-y-6">
        <article class="rounded-2xl border bg-background p-6 shadow-sm">
          <header class="mb-4 flex items-center justify-between">
            <div>
              <p class="text-lg font-semibold">Team focus</p>
              <p class="text-sm text-muted-foreground">
                Understand capacity before planning the next sprint.
              </p>
            </div>
          </header>
          <ul class="space-y-4">
            <li v-for="team in teamLoad" :key="team.id">
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-medium">{{ team.name }}</p>
                  <p class="text-xs text-muted-foreground">{{ team.focus }}</p>
                </div>
                <span class="text-sm text-muted-foreground">{{ Math.round(team.load * 100) }}% load</span>
              </div>
              <div class="mt-2 h-2 rounded-full bg-muted">
                <span
                  class="block h-full rounded-full bg-secondary transition-all"
                  :style="{ width: `${team.load * 100}%` }"
                />
              </div>
              <p class="mt-1 text-xs text-muted-foreground">
                {{ team.members }} specialists assigned
              </p>
            </li>
          </ul>
        </article>

        <article class="rounded-2xl border bg-background p-6 shadow-sm">
          <header class="mb-4">
            <p class="text-lg font-semibold">Recent signals</p>
            <p class="text-sm text-muted-foreground">
              Notes and events from the last few days.
            </p>
          </header>
          <ol class="space-y-4">
            <li v-for="event in activity" :key="event.id" class="flex gap-3">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
              >
                <component :is="activityIcons[event.category]" class="h-5 w-5" />
              </span>
              <div>
                <p class="text-sm font-medium">{{ event.title }}</p>
                <p class="text-xs text-muted-foreground">
                  {{ event.description }}
                </p>
                <p class="text-xs text-muted-foreground">{{ formatTimeAgo(event.timestamp) }}</p>
              </div>
            </li>
          </ol>
        </article>
      </div>
    </section>
  </div>
</template>
