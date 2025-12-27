import { Inject, Injectable } from "di-injectable";
import { HttpClient } from "@/core/network/httpClient";
import type { DashboardSummary } from "../models/dashboard";

@Injectable()
export default class DashboardService {
  constructor(@Inject(HttpClient) private readonly httpClient: HttpClient) {}

  fetchSummary() {
    return this.httpClient.get<DashboardSummary>("/mock/dashboard-summary.json");
  }
}
