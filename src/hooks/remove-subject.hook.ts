import { SubjectsService } from "@/services/subjects.service";
import { useMutating } from "./mutate.hook";
import { DELETE_SUBJECT, GET_SUBJECTS } from "@/constants/query-keys.constants";

export const useRemoveSubject = () => {
  const subjects = new SubjectsService();
  return useMutating([DELETE_SUBJECT], (id: number) => subjects.delete(id), [
    GET_SUBJECTS,
  ]);
};
