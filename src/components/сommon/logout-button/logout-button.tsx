import { useLogout } from "@/hooks/logout.hook";
import { useProfile } from "@/hooks/profile.hook";
import type { FC, JSX, MouseEvent } from "react";
import styles from "./logout-button.module.scss";

export const LogoutButton: FC = (): JSX.Element | null => {
    const { data, isSuccess } = useProfile();
    const { mutate: logout } = useLogout();

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        logout(null);
    };

    if (!isSuccess || !data) {
        return null;
    }

    return (
        <a href="#" onClick={handleClick} className={styles.logout}>
            Вихід
        </a>
    );
}