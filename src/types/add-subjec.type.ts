import type { Subject } from "./subject.type";

export type NewSubject = Pick<Subject, "name" | "description"> & {
  teacherId: number;
};
