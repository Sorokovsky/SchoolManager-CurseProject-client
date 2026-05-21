import type { AddParent } from "@/types/add-parent.type";
import type { Parent } from "@/types/parent.type";
import { client } from "@/utils/http-client";

export class ParentsService {
  private static readonly PARENTS: string = "/parents";

  public async getAll(): Promise<Parent[]> {
    const response = await client.get(ParentsService.PARENTS);
    return response.data;
  }

  public async create(payload: AddParent): Promise<void> {
    console.log(payload);

    const response = await client.post(ParentsService.PARENTS, payload);
    return response.data;
  }

  public async delete(id: number): Promise<void> {
    const response = await client.delete(`${ParentsService.PARENTS}/${id}`);
    return response.data;
  }
}
