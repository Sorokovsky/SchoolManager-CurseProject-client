import type { Employee } from "@/types/employee.type";
import type { NewEmployee } from "@/types/new-employee.type";
import { client } from "@/utils/http-client";

export class EmployeesService {
  private static readonly EMPLOYEES: string = "/employees";

  public async getAll(): Promise<Employee[]> {
    const response = await client.get(EmployeesService.EMPLOYEES);
    return response.data;
  }

  public async create(payload: NewEmployee): Promise<void> {
    const response = await client.post(EmployeesService.EMPLOYEES, payload);
    return response.data;
  }
}
