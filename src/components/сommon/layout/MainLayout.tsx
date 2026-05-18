import { type JSX } from "react";
import styles from "./MainLayout.module.scss";
import clsx from "clsx";
import { Header } from "../header/Header";
import { Outlet } from "react-router";
import { useGuard } from "@/hooks/guard.hook";

export const MainLayout = (): JSX.Element => {
    useGuard();
    return (
        <div className={clsx(styles.page)}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}