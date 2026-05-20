import { RequirementsService } from "@/services/requirements.service";
import { useMutating } from "./mutate.hook";
import {
  DELETE_REQUIREMENTS,
  GET_REQUIREMENTS,
} from "@/constants/query-keys.constants";

export const useDeleteRequirement = () => {
  const requirements = new RequirementsService();
  return useMutating(
    [DELETE_REQUIREMENTS],
    (id: number) => requirements.delete(id),
    [GET_REQUIREMENTS],
  );
};
