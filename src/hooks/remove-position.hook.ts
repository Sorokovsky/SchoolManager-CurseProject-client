import { useMutating } from "./mutate.hook";
import {
  EMPLOYEES_KEY,
  REMOVE_POSITION,
} from "@/constants/query-keys.constants";
import type { RemovePosition } from "@/types/remove-position.type";
import { EmployeesService } from "@/services/employees.service";

export const useRemovePosition = () => {
  const employees = new EmployeesService();
  return useMutating(
    [REMOVE_POSITION],
    (payload: RemovePosition) => employees.removePosition(payload),
    [EMPLOYEES_KEY],
  );
};
