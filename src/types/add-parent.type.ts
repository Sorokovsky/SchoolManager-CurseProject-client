import type { Parent } from "./parent.type";

export type AddParent = Pick<Parent, "job" | "phoneNumber"> & {
  userId: number;
};
