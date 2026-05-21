import { ClassesService } from "@/services/classes.service";
import { useMutating } from "./mutate.hook";
import { CREATE_CLASS, GET_CLASSES } from "@/constants/query-keys.constants";
import type { AddClass } from "@/types/add-class.type";

export const useCreateClass = () => {
  const classes = new ClassesService();
  return useMutating(
    [CREATE_CLASS],
    (payload: AddClass) => classes.create(payload),
    [GET_CLASSES],
  );
};
