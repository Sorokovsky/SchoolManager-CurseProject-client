import type { CreatePupil } from "@/types/create-pupil.type";
import type { Pupil } from "@/types/pupil.type";
import { client } from "@/utils/http-client";

export class PupilsService {
  private static readonly PUPILS: string = "/pupils";

  public async getAll(): Promise<Pupil[]> {
    const response = await client.get(PupilsService.PUPILS);
    return response.data;
  }

  public async delete(id: number): Promise<void> {
    const response = await client.delete(`${PupilsService.PUPILS}/${id}`);
    return response.data;
  }

  public async create(payload: CreatePupil): Promise<void> {
    const response = await client.post(PupilsService.PUPILS, payload);
    return response.data;
  }
}
