import { ClassesService } from "@/services/classes.service";
import { useMutating } from "./mutate.hook";
import { DELETE_CLASS, GET_CLASSES } from "@/constants/query-keys.constants";

export const useDeleteClass = () => {
  const classes = new ClassesService();
  return useMutating([DELETE_CLASS], (id: number) => classes.delete(id), [
    GET_CLASSES,
  ]);
};
