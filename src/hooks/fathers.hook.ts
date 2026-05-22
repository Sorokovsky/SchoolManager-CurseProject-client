import type { Parent } from "@/types/parent.type";
import { useParents } from "./parents.hook";

export const useFathers = (): Parent[] => {
  const { data: parents } = useParents();
  return parents === undefined
    ? []
    : parents.filter((parent) => parent.gender === false);
};
