import { Employees } from "@/components/pages/employees/employees";
import { Login } from "@/components/pages/login/login";
import { NewEmployee } from "@/components/pages/new-employee/new-employee";
import { Positions } from "@/components/pages/positions/positions";
import { Register } from "@/components/pages/register/register";
import { Requirements } from "@/components/pages/requirements/requirements";
import { Responsibilities } from "@/components/pages/responsibilities/responsibilities";
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

export const newEmployee: Route = {
  path: "/employees/new",
  element: <NewEmployee />,
  roles: ["ADMIN"],
  isAuthenticated: true,
  title: "Новий працівник"
}

export const employeesPage: Route = {
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

export const positionsPage: Route = {
  path: "/positions",
  isAuthenticated: true,
  roles: ["ADMIN"],
  element: <Positions />,
  title: "Посади"
}

export const responsibilitiesPage: Route = {
  path: "/responsibilities",
  isAuthenticated: true,
  roles: ["ADMIN"],
  element: <Responsibilities />,
  title: "Відповідальносі"
};

export const requirementsPage: Route = {
  path: "/requirements",
  isAuthenticated: true,
  roles: ["ADMIN"],
  element: <Requirements />,
  title: "Вимоги"
};

export const navigationPages: Route[] = [pupilsPage, parentsPage, employeesPage, schedulesPage, positionsPage, responsibilitiesPage, requirementsPage];
export const authorizationPages: Route[] = [registerPage, loginPage];
export const allPages: Route[] = [...navigationPages, ...authorizationPages, newEmployee];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: allPages
  }
]);