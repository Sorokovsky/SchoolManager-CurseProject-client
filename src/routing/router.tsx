import { Employees } from "@/components/pages/employees/employees";
import { Login } from "@/components/pages/login/login";
import { Register } from "@/components/pages/register/register";
import { MainLayout } from "@/components/сommon/layout/MainLayout";
import type { Route } from "@/types/route.type";
import { createBrowserRouter } from "react-router";

const pupilsPage: Route = {
  element: <div>Учні</div>,
  path: "/pupils",
  roles: ["EMPLOYEE"],
  isAuthenticated: true,
  title: "Учні"
};

const parentsPage: Route = {
  path: '/parents',
  element: <div>Батьки</div>,
  roles: ["EMPLOYEE"],
  isAuthenticated: true,
  title: "Батьки"
};

const employeesPage: Route = {
  path: '/employees',
  isAuthenticated: true,
  element: <Employees />,
  roles: ["ADMIN"],
  title: "Працівники"
};
const schedulesPage: Route = {
  path: '/schedules',
  isAuthenticated: true,
  element: <div>Розклад</div>,
  roles: ["PUPIL", "EMPLOYEE"],
  title: "Розклад"
};

const registerPage: Route = {
  path: "/register",
  isAuthenticated: false,
  element: <Register />,
  roles: null,
  title: "Реєстрація"
}

export const loginPage: Route = {
  path: "/login",
  isAuthenticated: false,
  element: <Login />,
  roles: null,
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