import { EmployeesService } from "@/services/employees.service";
import { useQuerying } from "./query.hook";
import { EMPLOYEES_KEY } from "@/constants/query-keys.constants";

export const useEmployeesByPosition = (id: number | null = null) => {
  const employees = new EmployeesService();
  return useQuerying([EMPLOYEES_KEY], () =>
    id === null ? employees.getAll() : employees.getByPosition(id),
  );
};
