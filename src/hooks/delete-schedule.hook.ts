import { SchedulesService } from "@/services/schedules.service";
import { useMutating } from "./mutate.hook";
import {
  DELETE_SCHEDULE,
  GET_SCHEDULES,
} from "@/constants/query-keys.constants";

export const useDeleteSchedule = () => {
  const schedules = new SchedulesService();
  return useMutating([DELETE_SCHEDULE], (id: number) => schedules.delete(id), [
    GET_SCHEDULES,
  ]);
};
