import { useQuerying } from "./query.hook";
import { USERS_KEY } from "@/constants/query-keys.constants";
import { UsersService } from "@/services/users.service";

export const useUsers = () => {
  const users = new UsersService();
  return useQuerying([USERS_KEY], () => users.getAll());
};
