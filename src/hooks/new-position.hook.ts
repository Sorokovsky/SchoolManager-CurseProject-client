import { PositionsService } from "@/services/positions.service";
import { useMutating } from "./mutate.hook";
import { GET_POSITIONS, NEW_POSITION } from "@/constants/query-keys.constants";
import type { NewPosition } from "@/types/new-position.type";

export const useNewPosition = () => {
  const positions = new PositionsService();
  return useMutating(
    [NEW_POSITION],
    (payload: NewPosition) => positions.create(payload),
    [GET_POSITIONS],
  );
};
