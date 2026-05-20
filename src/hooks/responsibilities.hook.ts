import { ResponsibilitiesService } from "@/services/responsibilities.service";
import { GET_RESPONIBILITIES } from "@/constants/query-keys.constants";
import { useQuerying } from "./query.hook";

export const useResponsibilities = () => {
  const responsibilities = new ResponsibilitiesService();
  return useQuerying([GET_RESPONIBILITIES], () => responsibilities.getAll());
};
