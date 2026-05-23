import { EmployeesService } from "@/services/employees.service";
import { useMutating } from "./mutate.hook";
import {
  DELETE_EMPLOYEE,
  EMPLOYEES_KEY,
} from "@/constants/query-keys.constants";

export const useDeleteEmployee = () => {
  const employees = new EmployeesService();
  return useMutating([DELETE_EMPLOYEE], (id: number) => employees.delete(id), [
    EMPLOYEES_KEY,
  ]);
};
