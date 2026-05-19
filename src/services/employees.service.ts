import type { AddPosition } from "@/types/add-position.type";
import type { Employee } from "@/types/employee.type";
import type { NewEmployee } from "@/types/new-employee.type";
import { client } from "@/utils/http-client";

export class EmployeesService {
  private static readonly EMPLOYEES: string = "/employees";
  private static readonly ADD_POSITION: string = `${EmployeesService.EMPLOYEES}/add-position`;

  public async getAll(): Promise<Employee[]> {
    const response = await client.get(EmployeesService.EMPLOYEES);
    return response.data;
  }

  public async create(payload: NewEmployee): Promise<void> {
    const response = await client.post(EmployeesService.EMPLOYEES, payload);
    return response.data;
  }

  public async addPosition(payload: AddPosition): Promise<Employee> {
    const response = await client.put(
      `${EmployeesService.ADD_POSITION}/${payload.id}/${payload.positionId}`,
    );
    return response.data;
  }
}
