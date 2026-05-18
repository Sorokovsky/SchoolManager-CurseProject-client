import { BearerTokenStorageService } from "@/services/bearer-token-storage.service";
import axios, { type AxiosInstance } from "axios";

const bearerStorage = new BearerTokenStorageService();

export const client: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});
client.interceptors.request.use(
  (config) => {
    const accessToken: string | null = bearerStorage.getToken();
    if (accessToken == null) return config;
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error),
);

client.interceptors.response.use(
  (response) => {
    const header: unknown =
      response.headers?.authorization ||
      response.headers?.Authorization ||
      response.headers?.["authorization"];

    if (header == null || header == undefined) return response;
    if (typeof header !== "string" || !header.startsWith("Bearer"))
      return response;
    bearerStorage.setToken(header.replace("Bearer ", ""));
    return response;
  },
  (error) => Promise.reject(error),
);
