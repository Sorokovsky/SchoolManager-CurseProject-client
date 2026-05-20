import { RequirementsService } from "@/services/requirements.service";
import { useQuerying } from "./query.hook";
import { GET_REQUIREMENTS } from "@/constants/query-keys.constants";

export const useRequirements = () => {
  const requirements = new RequirementsService();
  return useQuerying([GET_REQUIREMENTS], () => requirements.getAll());
};
