import type { Employee } from "./employee.type";

export type Subject = {
  id: number;
  name: string;
  description: string;
  teacher: Employee;
};
