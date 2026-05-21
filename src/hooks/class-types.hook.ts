import { ClassTypesService } from "@/services/class-types.service";
import { useQuerying } from "./query.hook";
import { GET_CLASS_TYPES } from "@/constants/query-keys.constants";

export const useClassTypes = () => {
  const classTypes = new ClassTypesService();
  return useQuerying([GET_CLASS_TYPES], () => classTypes.getAll());
};
