import { LOGIN_KEY, PROFILE_KEY } from "@/constants/query-keys.constants";
import { useMutating } from "./mutate.hook";
import { AuthorizationService } from "@/services/authorization.service";
import type { LoginPayload } from "@/types/login.type";

export const useLogin = () => {
  const authorization = new AuthorizationService();
  return useMutating(
    [LOGIN_KEY],
    (data: LoginPayload) => authorization.login(data),
    [PROFILE_KEY],
  );
};
