import { SubjectsService } from "@/services/subjects.service";
import { useQuerying } from "./query.hook";
import { GET_SUBJECTS } from "@/constants/query-keys.constants";

export const useSubjects = () => {
  const subjects = new SubjectsService();
  return useQuerying([GET_SUBJECTS], () => subjects.getAll());
};
