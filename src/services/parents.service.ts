import type { Parent } from "@/types/parent.type";
import { client } from "@/utils/http-client";

export class ParentsService {
  private static readonly PARENTS: string = "/parents";

  public async getAll(): Promise<Parent[]> {
    const response = await client.get(ParentsService.PARENTS);
    return response.data;
  }
}
