import type { ClassType } from "./class-type.type";
import type { Employee } from "./employee.type";

export type Class = {
  id: number;
  curator: Employee;
  classType: ClassType;
  letter: string;
  studyYear: number;
  createdAtYear: number;
  pupilsCount: number;
};
