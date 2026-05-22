import { SchedulesService } from "@/services/schedules.service";
import { useMutating } from "./mutate.hook";
import {
  CREATE_SCHEDULE,
  GET_SCHEDULES,
} from "@/constants/query-keys.constants";
import type { CreateSchedule } from "@/types/create-schedule";

export const useCreateSchedule = () => {
  const schedules = new SchedulesService();
  return useMutating(
    [CREATE_SCHEDULE],
    (payload: CreateSchedule) => schedules.create(payload),
    [GET_SCHEDULES],
  );
};
