import { SchedulesService } from "@/services/schedules.service";
import { useQuerying } from "./query.hook";
import { GET_SCHEDULES } from "@/constants/query-keys.constants";

export const useSchedules = () => {
  const schedules = new SchedulesService();
  return useQuerying([GET_SCHEDULES], () => schedules.getAll());
};
