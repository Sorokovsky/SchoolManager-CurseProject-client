import type { ReactNode } from "react";

export type Route = {
  path: string;
  role: string | null;
  isAuthenticated: boolean;
  element: ReactNode;
  title: string;
};
