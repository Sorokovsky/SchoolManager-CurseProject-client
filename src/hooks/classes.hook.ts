import { ClassesService } from "@/services/classes.service";
import { useQuerying } from "./query.hook";
import { GET_CLASSES } from "@/constants/query-keys.constants";

export const useClasses = (classTypeId: number | null = null) => {
  const classes = new ClassesService();
  return useQuerying(
    [GET_CLASSES],
    classTypeId === null
      ? () => classes.getAll()
      : () => classes.getByType(classTypeId),
  );
};
