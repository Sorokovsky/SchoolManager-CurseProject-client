import { ResponsibilitiesService } from "@/services/responsibilities.service";
import { useMutating } from "./mutate.hook";
import {
  DELETE_RESPONIBILITIES,
  GET_RESPONIBILITIES,
} from "@/constants/query-keys.constants";

export const useDeleteResponsibility = () => {
  const responsibilities = new ResponsibilitiesService();
  return useMutating(
    [DELETE_RESPONIBILITIES],
    (id: number) => responsibilities.delete(id),
    [GET_RESPONIBILITIES],
  );
};
