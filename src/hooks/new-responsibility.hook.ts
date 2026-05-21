import { ResponsibilitiesService } from "@/services/responsibilities.service"
import { useMutating } from "./mutate.hook";
import { GET_RESPONIBILITIES, NEW_RESPONSIBILITY } from "@/constants/query-keys.constants";
import type { CreateResponsibility } from "@/types/create-responsibility.type";

export const useNewResponsibility = () => {
    const responsibilities = new ResponsibilitiesService();
    return useMutating(
        [NEW_RESPONSIBILITY],
        (payload: CreateResponsibility) => responsibilities.create(payload),
        [GET_RESPONIBILITIES]
    )
}