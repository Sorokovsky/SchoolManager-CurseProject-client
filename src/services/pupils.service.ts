import type { Pupil } from "@/types/pupil.type";
import { client } from "@/utils/http-client";

export class PupilsService {
  private static readonly PUPILS: string = "/pupils";

  public async getAll(): Promise<Pupil[]> {
    const response = await client.get(PupilsService.PUPILS);
    return response.data;
  }
}
