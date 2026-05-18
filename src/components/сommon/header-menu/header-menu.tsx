import { useMenu } from "@/hooks/menu.hook";
import type { Route } from "@/types/route.type";
import type { FC, JSX } from "react";
import { Link } from "react-router";
import styles from "./header-menu.module.scss";

export type HeaderMenuProps = {
    menu: Route[];
}

export const HeaderMenu: FC<HeaderMenuProps> = ({ menu }): JSX.Element => {
    const preparedMenu = useMenu(menu);
    if (preparedMenu.length === 0) return null;
    return (
        <nav className={styles.menu}>
                    <ul>
                        {preparedMenu.map(({ path, title }) => <li key={path}><Link to={path}>{title}</Link></li>)}
                    </ul>
                </nav>
    );
}