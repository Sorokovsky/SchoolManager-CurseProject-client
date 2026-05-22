import { PupilsService } from "@/services/pupils.service";
import { useMutating } from "./mutate.hook";
import { CREATE_PUPIL, GET_PUPILS } from "@/constants/query-keys.constants";
import type { CreatePupil } from "@/types/create-pupil.type";

export const useCreatePupil = () => {
  const pupils = new PupilsService();
  return useMutating(
    [CREATE_PUPIL],
    (payload: CreatePupil) => pupils.create(payload),
    [GET_PUPILS],
  );
};
