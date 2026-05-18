import type { User } from "./user.type";

export type RegisterPayload = Required<Omit<User, "id">> & {
  password: string;
};
