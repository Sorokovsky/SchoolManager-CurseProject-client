import { EMPLOYEES_KEY, NEW_EMPLOYEE } from "@/constants/query-keys.constants";
import { EmployeesService } from "@/services/eemployees.service";
import type { NewEmployee } from "@/types/new-employee.type";
import { useMutating } from "./mutate.hook";

export const useNewEmployee = () => {
  const employees = new EmployeesService();
  return useMutating(
    [NEW_EMPLOYEE],
    (payload: NewEmployee) => employees.create(payload),
    [EMPLOYEES_KEY],
  );
};
