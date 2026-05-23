import type { CreateSchedule } from "@/types/create-schedule";
import type { Schedule } from "@/types/schedule.type";
import { client } from "@/utils/http-client";

export class SchedulesService {
  private static readonly SCHEDULES: string = "/schedules";
  private static readonly BY_CLASS: string = `${SchedulesService.SCHEDULES}/by-class`;

  public async getAll(): Promise<Schedule[]> {
    const response = await client.get(SchedulesService.SCHEDULES);
    return response.data;
  }

  public async delete(id: number): Promise<void> {
    const response = await client.delete(`${SchedulesService.SCHEDULES}/${id}`);
    return response.data;
  }

  public async create(payload: CreateSchedule): Promise<void> {
    const response = await client.post(SchedulesService.SCHEDULES, payload);
    return response.data;
  }

  public async getByClass(classId: number): Promise<Schedule[]> {
    const response = await client.get(
      `${SchedulesService.BY_CLASS}/${classId}`,
    );
    return response.data;
  }
}
