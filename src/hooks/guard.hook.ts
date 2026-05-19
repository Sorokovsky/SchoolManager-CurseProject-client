import { useLocation, useNavigate } from "react-router";
import { useProfile } from "./profile.hook";
import { allPages, loginPage } from "@/routing/router";
import { useMenu } from "./menu.hook";
import { useEffect } from "react";

export const useGuard = () => {
  const prepared = useMenu(allPages);
  const { data, isLoading } = useProfile();
  const navigate = useNavigate();
  const location = useLocation();
  const page = allPages.find((page) => location.pathname.includes(page.path));
  useEffect(() => {
    if (isLoading || !page) return;
    const hasAccess = prepared.includes(page);
    if (!hasAccess) {
      if (data) {
        navigate("/");
      } else {
        navigate(loginPage.path);
      }
    }
  }, [page, prepared, data, isLoading, navigate]);
};
