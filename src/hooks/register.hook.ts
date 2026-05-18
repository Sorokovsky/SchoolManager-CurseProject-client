import { PROFILE_KEY, REGISTER_KEY } from "@/constants/query-keys.constants";
import { useMutating } from "./mutate.hook";
import { AuthorizationService } from "@/services/authorization.service";
import type { RegisterPayload } from "@/types/register.type";

export const useRegister = () => {
  const authorization = new AuthorizationService();
  return useMutating(
    [REGISTER_KEY],
    (payload: RegisterPayload): Promise<void> =>
      authorization.register(payload),
    [PROFILE_KEY],
  );
};
