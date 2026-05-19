import type { Passport } from "./passport.type";
import type { Position } from "./position.type";
import type { User } from "./user.type";

export type Employee = User & {
  passports: Passport[];
  positions: Position[];
  phoneNumber: string;
};
