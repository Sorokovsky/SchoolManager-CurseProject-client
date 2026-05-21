import { ClassesService } from "@/services/classes.service";
import { useQuerying } from "./query.hook";
import { GET_CLASSES } from "@/constants/query-keys.constants";

export const useClasses = () => {
  const classes = new ClassesService();
  return useQuerying([GET_CLASSES], () => classes.getAll());
};
