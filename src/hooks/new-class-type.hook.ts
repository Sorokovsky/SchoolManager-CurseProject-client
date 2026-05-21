import { ClassTypesService } from "@/services/class-types.service";
import { useMutating } from "./mutate.hook";
import { GET_CLASS_TYPES } from "@/constants/query-keys.constants";
import type { NewClassType } from "@/types/new-class-type.type";

export const useNewClassType = () => {
  const classTypes = new ClassTypesService();
  return useMutating(
    [GET_CLASS_TYPES],
    (payload: NewClassType) => classTypes.create(payload),
    [GET_CLASS_TYPES],
  );
};
