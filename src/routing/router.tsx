import { ClassTypes } from "@/components/pages/class-types/class-types";
import { Classes } from "@/components/pages/classes/classes";
import { Employees } from "@/components/pages/employees/employees";
import { Login } from "@/components/pages/login/login";
import { NewEmployee } from "@/components/pages/new-employee/new-employee";
import { Parents } from "@/components/pages/parents/parents";
import { Positions } from "@/components/pages/positions/positions";
import { Pupils } from "@/components/pages/pupils/pupils";
import { Register } from "@/components/pages/register/register";
import { Requirements } from "@/components/pages/requirements/requirements";
import { Responsibilities } from "@/components/pages/responsibilities/responsibilities";
import { Schedules } from "@/components/pages/schedules/schedules";
import { Subjects } from "@/components/pages/subjects/subjects";
import { MainLayout } from "@/components/сommon/layout/MainLayout";
import type { Route } from "@/types/route.type";
import { createBrowserRouter } from "react-router";

const pupilsPage: Route = {
  element: <Pupils />,
  path: "/pupils",
  roles: ["EMPLOYEE", "ADMIN"],
  isAuthenticated: true,
  title: "Учні"
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
  element: <Schedules />,
  roles: ["PUPIL", "EMPLOYEE", "ADMIN"],
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

export const parentsPage: Route = {
  path: "/parents",
  isAuthenticated: true,
  title: "Батьки",
  element: <Parents />,
  roles: ["ADMIN"]
}

export const classTypesPage: Route = {
  path: "/class-types",
  isAuthenticated: true,
  title: "Типи класів",
  element: <ClassTypes />,
  roles: ["ADMIN"]
}

export const classesPage: Route = {
  path: "/classes",
  isAuthenticated: true,
  title: "Класи",
  element: <Classes />,
  roles: ['ADMIN']
}

export const subjectsPage: Route = {
  path: "/subjects",
  isAuthenticated: true,
  title: "Предмети",
  element: <Subjects />,
  roles: ['ADMIN']
}

export const navigationPages: Route[] = [
  pupilsPage,
  parentsPage,
  employeesPage,
  schedulesPage,
  positionsPage,
  responsibilitiesPage,
  requirementsPage,
  classTypesPage,
  classesPage,
  subjectsPage
];
export const authorizationPages: Route[] = [registerPage, loginPage];
export const allPages: Route[] = [...navigationPages, ...authorizationPages, newEmployee];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: allPages
  }
]);