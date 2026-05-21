import type { User } from "./user.type";

export type Parent = User & {
  job: string;
  phoneNumber: string;
};
