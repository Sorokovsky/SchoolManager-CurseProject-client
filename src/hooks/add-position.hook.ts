import { EmployeesService } from "@/services/employees.service";
import { useMutating } from "./mutate.hook";
import { ADD_POSITION, EMPLOYEES_KEY } from "@/constants/query-keys.constants";
import type { AddPosition } from "@/types/add-position.type";

export const useAddPosition = () => {
  const employees = new EmployeesService();
  return useMutating(
    [ADD_POSITION],
    (payload: AddPosition) => employees.addPosition(payload),
    [EMPLOYEES_KEY],
  );
};
