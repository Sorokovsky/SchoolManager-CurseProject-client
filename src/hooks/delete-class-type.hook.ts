import { ClassTypesService } from "@/services/class-types.service";
import { useMutating } from "./mutate.hook";
import {
  DELETE_CLASS_TYPE,
  GET_CLASS_TYPES,
} from "@/constants/query-keys.constants";

export const useDeleteClassType = () => {
  const classTypes = new ClassTypesService();
  return useMutating(
    [DELETE_CLASS_TYPE],
    (id: number) => classTypes.delete(id),
    [GET_CLASS_TYPES],
  );
};
