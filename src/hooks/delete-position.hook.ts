import { PositionsService } from "@/services/positions.service";
import { useMutating } from "./mutate.hook";
import {
  DELETE_POSITION,
  EMPLOYEES_KEY,
  GET_POSITIONS,
} from "@/constants/query-keys.constants";

export const useDeletePosition = () => {
  const positions = new PositionsService();
  return useMutating([DELETE_POSITION], (id: number) => positions.delete(id), [
    GET_POSITIONS,
    EMPLOYEES_KEY,
  ]);
};
