import { GET_POSITIONS } from "@/constants/query-keys.constants";

import { PositionsService } from "@/services/positions.service";
import { useQuerying } from "./query.hook";

export const usePositions = () => {
  const positions = new PositionsService();
  return useQuerying([GET_POSITIONS], () => positions.getAll());
};
