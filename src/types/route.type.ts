import type { ReactNode } from "react";

export type Route = {
  path: string;
  roles: string[] | null;
  isAuthenticated: boolean;
  element: ReactNode;
  title: string;
};
