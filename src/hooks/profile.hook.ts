import { PROFILE_KEY } from "@/constants/query-keys.constants";
import { useQuerying } from "./query.hook";
import { AuthorizationService } from "@/services/authorization.service";

export const useProfile = () => {
  const authorization = new AuthorizationService();
  return useQuerying(
    [PROFILE_KEY],
    async () => await authorization.getProfile(),
  );
};
