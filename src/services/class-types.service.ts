import type { ClassType } from "@/types/class-type.type";
import { client } from "@/utils/http-client";

export class ClassTypesService {
  private static readonly CLASS_TYPES: string = "/class-types";

  public async getAll(): Promise<ClassType[]> {
    const response = await client.get(ClassTypesService.CLASS_TYPES);
    return response.data;
  }

  public async delete(id: number): Promise<void> {
    const response = await client.delete(
      `${ClassTypesService.CLASS_TYPES}/${id}`,
    );
    return response.data;
  }
}
