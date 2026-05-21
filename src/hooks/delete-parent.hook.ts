import { ParentsService } from "@/services/parents.service";
import { useMutating } from "./mutate.hook";
import { DELETE_PARENT, GET_PARENTS } from "@/constants/query-keys.constants";

export const useDeleteParent = () => {
  const parents = new ParentsService();
  return useMutating([DELETE_PARENT], (id: number) => parents.delete(id), [
    GET_PARENTS,
  ]);
};
