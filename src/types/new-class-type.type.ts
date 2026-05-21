import type { ClassType } from "./class-type.type";

export type NewClassType = Pick<ClassType, "name" | "description">;
