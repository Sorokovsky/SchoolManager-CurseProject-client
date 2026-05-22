import type { Class } from "./class.type";
import type { Subject } from "./subject.type";

export type Schedule = {
  id: number;
  subject: Subject;
  clazz: Class;
  date: Date;
  dateOfWeek: number;
  startTime: string;
  endTime: string;
};
