import type { AddClass } from "@/types/add-class.type";
import type { Class } from "@/types/class.type";
import { client } from "@/utils/http-client";

export class ClassesService {
  private static readonly CLASSES: string = "/classes";
  private static readonly BY_TYPE: string = `${ClassesService.CLASSES}/by-class-type`;

  public async getAll(): Promise<Class[]> {
    const response = await client.get(ClassesService.CLASSES);
    return response.data;
  }

  public async delete(id: number): Promise<void> {
    const response = await client.delete(`${ClassesService.CLASSES}/${id}`);
    return response.data;
  }

  public async create(payload: AddClass): Promise<void> {
    const response = await client.post(ClassesService.CLASSES, payload);
    return response.data;
  }

  public async getByType(id: number): Promise<Class[]> {
    const response = await client.get(`${ClassesService.BY_TYPE}/${id}`);
    return response.data;
  }
}
