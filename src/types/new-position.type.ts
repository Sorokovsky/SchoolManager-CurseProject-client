import type { Position } from "./position.type";

export type NewPosition = Omit<
  Position,
  "id" | "requirements" | "responsibilities"
>;
