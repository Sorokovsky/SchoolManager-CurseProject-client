import type { Class } from "./class.type";
import type { Parent } from "./parent.type";
import type { User } from "./user.type";

export type Pupil = User & {
  extraInformation: string;
  mother: Parent;
  father: Parent;
  clazz: Class;
};
