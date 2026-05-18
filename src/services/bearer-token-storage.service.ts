import { ACCESS_TOKEN_KEY } from "@/constants/tokens.constants";

export class BearerTokenStorageService {
  private static readonly KEY: string = ACCESS_TOKEN_KEY;

  constructor() {}

  public getToken(): string | null {
    return localStorage.getItem(BearerTokenStorageService.KEY);
  }

  public setToken(token: string): void {
    localStorage.setItem(BearerTokenStorageService.KEY, token);
  }

  public clearToken() {
    localStorage.clear();
  }
}
