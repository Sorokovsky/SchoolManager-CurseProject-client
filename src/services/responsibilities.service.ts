import type { CreateResponsibility } from "@/types/create-responsibility.type";
import type { Responsibility } from "@/types/responsibility.type";
import { client } from "@/utils/http-client";

export class ResponsibilitiesService {
  private static readonly RESPONSIBILITIES: string = "/responsibilities";

  public async getAll(): Promise<Responsibility[]> {
    const response = await client.get(ResponsibilitiesService.RESPONSIBILITIES);
    return response.data;
  }

  public async delete(id: number): Promise<void> {
    const response = await client.delete(
      `${ResponsibilitiesService.RESPONSIBILITIES}/${id}`,
    );
    return response.data;
  }

  public async create(payload: CreateResponsibility): Promise<void> {
    const response = await client.post(ResponsibilitiesService.RESPONSIBILITIES, payload);
    return response.data;
  }
}
