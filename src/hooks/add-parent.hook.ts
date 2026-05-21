import { ParentsService } from "@/services/parents.service";
import { useMutating } from "./mutate.hook";
import { ADD_PARENT, GET_PARENTS } from "@/constants/query-keys.constants";
import type { AddParent } from "@/types/add-parent.type";

export const useAddParent = () => {
  const parents = new ParentsService();
  return useMutating(
    [ADD_PARENT],
    (payload: AddParent) => parents.create(payload),
    [GET_PARENTS],
  );
};
