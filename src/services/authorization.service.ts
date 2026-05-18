import type { LoginPayload } from "@/types/login.type";
import type { RegisterPayload } from "@/types/register.type";
import type { User } from "@/types/user.type";
import { client } from "@/utils/http-client";

export class AuthorizationService {
  private static readonly AUTHORIZATION: string = "/authorization";
  private static readonly PROFILE: string = `${AuthorizationService.AUTHORIZATION}/profile`;
  private static readonly LOGIN: string = `${AuthorizationService.AUTHORIZATION}/login`;
  private static readonly LOGOUT: string = `${AuthorizationService.AUTHORIZATION}/logout`;
  private static readonly REGISTER: string = `${AuthorizationService.AUTHORIZATION}/register`;

  public async getProfile(): Promise<User> {
    const response = await client.get<User>(AuthorizationService.PROFILE);
    return response.data;
  }

  public async register(payload: RegisterPayload): Promise<void> {
    const response = await client.post(AuthorizationService.REGISTER, payload);
    return response.data;
  }

  public async login(payload: LoginPayload): Promise<void> {
    const response = await client.post(AuthorizationService.LOGIN, payload);
    return response.data;
  }

  public async logout(): Promise<void> {
    const response = await client.delete(AuthorizationService.LOGOUT);
    return response.data;
  }
}
