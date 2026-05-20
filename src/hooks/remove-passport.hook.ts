import { EmployeesService } from "@/services/employees.service";
import { useMutating } from "./mutate.hook";
import {
  EMPLOYEES_KEY,
  REMOVE_PASSPORT,
} from "@/constants/query-keys.constants";
import type { RemovePassport } from "@/types/remove-passport.type";

export const useRemovePassport = () => {
  const employees = new EmployeesService();
  return useMutating(
    [REMOVE_PASSPORT],
    (payload: RemovePassport) => employees.removePassport(payload),
    [EMPLOYEES_KEY],
  );
};
