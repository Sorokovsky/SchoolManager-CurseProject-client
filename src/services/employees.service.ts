import type { AddPosition } from "@/types/add-position.type";
import type { Employee } from "@/types/employee.type";
import type { NewEmployee } from "@/types/new-employee.type";
import type { NewPassport } from "@/types/new-passport.type";
import type { RemovePassport } from "@/types/remove-passport.type";
import type { RemovePosition } from "@/types/remove-position.type";
import { client } from "@/utils/http-client";

export class EmployeesService {
  private static readonly EMPLOYEES: string = "/employees";
  private static readonly ADD_POSITION: string = `${EmployeesService.EMPLOYEES}/add-position`;
  private static readonly ADD_PASSPORT: string = `${EmployeesService.EMPLOYEES}/add-passport`;
  private static readonly REMOVE_POSITION: string = `${EmployeesService.EMPLOYEES}/remove-position`;
  private static readonly REMOVE_PASSPORT: string = `${EmployeesService.EMPLOYEES}/remove-passport`;

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

  public async removePosition(payload: RemovePosition): Promise<Employee> {
    const response = await client.put(
      `${EmployeesService.REMOVE_POSITION}/${payload.employeeId}/${payload.positionId}`,
    );
    return response.data;
  }

  public async addPassport(payload: NewPassport): Promise<Employee> {
    const response = await client.put(
      `${EmployeesService.ADD_PASSPORT}/${payload.employeeId}`,
      { data: payload.data, name: payload.name },
    );
    return response.data;
  }

  public async removePassport(payload: RemovePassport): Promise<Employee> {
    const response = await client.put(
      `${EmployeesService.REMOVE_PASSPORT}/${payload.employeeId}/${payload.passportId}`,
    );
    return response.data;
  }
}
