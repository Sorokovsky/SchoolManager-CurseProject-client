import { AuthorizationService } from "@/services/authorization.service";
import { useMutating } from "./mutate.hook";
import { LOGOUT_KEY, PROFILE_KEY } from "@/constants/query-keys.constants";
import { BearerTokenStorageService } from "@/services/bearer-token-storage.service";

export const useLogout = () => {
  const authorization = new AuthorizationService();
  const bearer = new BearerTokenStorageService();
  return useMutating(
    [LOGOUT_KEY],
    async () => {
      await authorization.logout();
      bearer.clearToken();
    },
    [PROFILE_KEY],
  );
};
