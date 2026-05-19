import { EMPLOYEES_KEY } from "@/constants/query-keys.constants";
import { useQuerying } from "./query.hook";
import { EmployeesService } from "@/services/eemployees.service";

export const useEmployees = () => {
  const employees = new EmployeesService();
  return useQuerying([EMPLOYEES_KEY], () => employees.getAll());
};
