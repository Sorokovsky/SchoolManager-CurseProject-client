import { CREATE_REQUIEMENTS, GET_REQUIREMENTS } from "@/constants/query-keys.constants"
import { useMutating } from "./mutate.hook"
import { RequirementsService } from "@/services/requirements.service"
import type { CreateRequirement } from "@/types/create-requirement.type";

export const useCreateRequirement = () => {
    const requirements = new RequirementsService();
    return useMutating(
        [CREATE_REQUIEMENTS],
        (payload: CreateRequirement) => requirements.create(payload),
        [GET_REQUIREMENTS]
    );
}