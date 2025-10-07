import { AxiosResponse } from "axios";
import { DataSnapshotData, SystemHealthData } from "../types";
import client from "./client";

export const getHealth = () => client.get<SystemHealthData>("admin/health/");
export const getSnapshot = (): Promise<AxiosResponse<DataSnapshotData>> => client.get("admin/snapshot/");
export const clearLogs = () => client.post("admin/clear-logs/");