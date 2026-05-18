import type { User } from "./user.type";

export type LoginPayload = Pick<User, "login"> & { password: string };
