import type { CreateRequirement } from "@/types/create-requirement.type";
import type { Requirement } from "@/types/requirement.type";
import { client } from "@/utils/http-client";

export class RequirementsService {
  private static readonly REQUIREMENTS: string = "/requirements";

  public async getAll(): Promise<Requirement[]> {
    const response = await client.get(RequirementsService.REQUIREMENTS);
    return response.data;
  }

  public async delete(id: number): Promise<void> {
    const response = await client.delete(
      `${RequirementsService.REQUIREMENTS}/${id}`,
    );
    return response.data;
  }

  public async create(payload: CreateRequirement): Promise<void> {
    const response = await client.post(RequirementsService.REQUIREMENTS, payload);
    return response.data;
  }
}
