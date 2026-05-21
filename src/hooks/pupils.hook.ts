import { PupilsService } from "@/services/pupils.service";
import { useQuerying } from "./query.hook";
import { GET_PUPILS } from "@/constants/query-keys.constants";

export const usePupils = () => {
  const pupils = new PupilsService();
  return useQuerying([GET_PUPILS], () => pupils.getAll());
};
