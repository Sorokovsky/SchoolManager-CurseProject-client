import type { User } from "@/types/user.type";
import { client } from "@/utils/http-client";

export class UsersService {
  private static readonly USERS: string = "/users";

  public async getAll(): Promise<User[]> {
    const response = await client.get(UsersService.USERS);
    return response.data;
  }
}
