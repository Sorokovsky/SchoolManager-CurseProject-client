import type { NewPosition } from "@/types/new-position.type";
import type { Position } from "@/types/position.type";
import { client } from "@/utils/http-client";

export class PositionsService {
  private static readonly POSITIONS: string = "/positions";

  public async getAll(): Promise<Position[]> {
    const response = await client.get(PositionsService.POSITIONS);
    return response.data;
  }

  public async create(payload: NewPosition): Promise<Position> {
    const response = await client.post(PositionsService.POSITIONS, payload);
    return response.data;
  }
}
