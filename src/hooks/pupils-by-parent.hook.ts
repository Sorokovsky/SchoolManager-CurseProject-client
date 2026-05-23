import { PupilsService } from "@/services/pupils.service";
import { useQuerying } from "./query.hook";
import { GET_PUPILS } from "@/constants/query-keys.constants";

export const usePupilsByParent = (id: number) => {
  const pupils = new PupilsService();
  return useQuerying([GET_PUPILS, `${id}`], () => pupils.getByParent(id));
};
