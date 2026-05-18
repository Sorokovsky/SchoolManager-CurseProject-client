import { Login } from "@/components/pages/login/login";
import { MainLayout } from "@/components/сommon/layout/MainLayout";
import type { Route } from "@/types/route.type";
import { createBrowserRouter } from "react-router";

const pupilsPage: Route = {
  element: <div>Учні</div>,
  path: "/pupils",
  role: null,
  isAuthenticated: true,
  title: "Учні"
};

const parentsPage: Route = {
  path: '/parents',
  element: <div>Батьки</div>,
  role: null,
  isAuthenticated: true,
  title: "Батьки"
};

const employeesPage: Route = {
  path: '/employees',
  isAuthenticated: true,
  element: <div>Працівники</div>,
  role: null,
  title: "Працівники"
};
const schedulesPage: Route = {
  path: '/schedules',
  isAuthenticated: true,
  element: <div>Розклад</div>,
  role: null,
  title: "Розклад"
};

const registerPage: Route = {
  path: "/register",
  isAuthenticated: false,
  element: <div>Реєстрація</div>,
  role: null,
  title: "Реєстрація"
}

export const loginPage: Route = {
  path: "/login",
  isAuthenticated: false,
  element: <Login />,
  role: null,
  title: "Вхід"
}

export const navigationPages: Route[] = [pupilsPage, parentsPage, employeesPage, schedulesPage];
export const authorizationPages: Route[] = [registerPage, loginPage];
export const allPages: Route[] = [...navigationPages, ...authorizationPages];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: allPages
  }
]);