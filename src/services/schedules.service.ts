import type { Schedule } from "@/types/schedule.type";
import { client } from "@/utils/http-client";

export class SchedulesService {
  private static readonly SCHEDULES: string = "/schedules";

  public async getAll(): Promise<Schedule[]> {
    const response = await client.get(SchedulesService.SCHEDULES);
    return response.data;
  }
}
