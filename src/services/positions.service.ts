import type { Position } from "@/types/position.type";
import { client } from "@/utils/http-client";

export class PositionsService {
  private static readonly POSITIONS: string = "/positions";

  public async getAll(): Promise<Position[]> {
    const response = await client.get(PositionsService.POSITIONS);
    return response.data;
  }
}
