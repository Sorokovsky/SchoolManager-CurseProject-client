import { SubjectsService } from "@/services/subjects.service";
import { useMutating } from "./mutate.hook";
import { CREATE_SUBJECT, GET_SUBJECTS } from "@/constants/query-keys.constants";
import type { NewSubject } from "@/types/add-subjec.type";

export const useAddSubject = () => {
  const subjects = new SubjectsService();
  return useMutating(
    [CREATE_SUBJECT],
    (payload: NewSubject) => subjects.create(payload),
    [GET_SUBJECTS],
  );
};
