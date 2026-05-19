import type { Requirement } from "./requirement.type";
import type { Responsibility } from "./responsibility.type";

export type Position = {
  id: number;
  name: string;
  salary: number;
  requirements: Requirement[];
  responsibilities: Responsibility[];
};
