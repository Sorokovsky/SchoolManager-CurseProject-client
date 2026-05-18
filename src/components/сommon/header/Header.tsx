import type { JSX } from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";
import { authorizationPages, navigationPages } from "@/routing/router";
import { HeaderMenu } from "../header-menu/header-menu";
import { LogoutButton } from "../logout-button/logout-button";

export const Header = (): JSX.Element => {
    return (
        <header className={clsx(styles.header)}>
            <div className={clsx(styles.container)}>
                <HeaderMenu menu={navigationPages} />
                <HeaderMenu menu={authorizationPages} />
                <LogoutButton />
            </div>
        </header>
    );
};