import { PupilsService } from "@/services/pupils.service";
import { useMutating } from "./mutate.hook";
import { DELETE_PUPIL, GET_PUPILS } from "@/constants/query-keys.constants";

export const useDeletePupil = () => {
  const pupils = new PupilsService();
  return useMutating([DELETE_PUPIL], (id: number) => pupils.delete(id), [
    GET_PUPILS,
  ]);
};
