import type { Route } from "@/types/route.type";
import { useProfile } from "./profile.hook";

export const useMenu = (menu: Route[]): Route[] => {
  const { data: user, isError, isLoading } = useProfile();
  console.log(user);

  if (isLoading || isError) {
    return menu.filter((item) => item.isAuthenticated === false);
  }
  return menu.filter((item) => {
    console.log(item);

    return (
      !!user === item.isAuthenticated &&
      (item.roles == null ? true : item.roles.includes(user?.role))
    );
  });
};
