import type { NewSubject } from "@/types/add-subjec.type";
import type { Subject } from "@/types/subject.type";
import { client } from "@/utils/http-client";

export class SubjectsService {
  private static readonly SUBJECTS: string = "/subjects";

  public async getAll(): Promise<Subject[]> {
    const response = await client.get(SubjectsService.SUBJECTS);
    return response.data;
  }

  public async create(payload: NewSubject): Promise<void> {
    const response = await client.post(SubjectsService.SUBJECTS, payload);
    return response.data;
  }

  public async delete(id: number): Promise<void> {
    const response = await client.delete(`${SubjectsService.SUBJECTS}/${id}`);
    return response.data;
  }
}
