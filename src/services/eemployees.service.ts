import type { Employee } from "@/types/employee.type";
import { client } from "@/utils/http-client";

export class EmployeesService {
  private static readonly EMPLOYEES: string = "/employees";

  public async getAll(): Promise<Employee[]> {
    const response = await client.get(EmployeesService.EMPLOYEES);
    return response.data;
  }
}
