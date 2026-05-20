import { EmployeesService } from "@/services/employees.service";
import { useMutating } from "./mutate.hook";
import { ADD_PASSPORT, EMPLOYEES_KEY } from "@/constants/query-keys.constants";
import type { NewPassport } from "@/types/new-passport.type";

export const useAddPassport = () => {
  const employees = new EmployeesService();
  return useMutating(
    [ADD_PASSPORT],
    (payload: NewPassport) => employees.addPassport(payload),
    [EMPLOYEES_KEY],
  );
};
