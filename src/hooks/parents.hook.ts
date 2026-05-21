import { ParentsService } from "@/services/parents.service";
import { useQuerying } from "./query.hook";
import { GET_PARENTS } from "@/constants/query-keys.constants";

export const useParents = () => {
  const parents = new ParentsService();
  return useQuerying([GET_PARENTS], () => parents.getAll());
};
