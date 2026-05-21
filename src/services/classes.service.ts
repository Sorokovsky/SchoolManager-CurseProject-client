import type { AddClass } from "@/types/add-class.type";
import type { Class } from "@/types/class.type";
import { client } from "@/utils/http-client";

export class ClassesService {
  private static readonly CLASSES: string = "/classes";

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
}
