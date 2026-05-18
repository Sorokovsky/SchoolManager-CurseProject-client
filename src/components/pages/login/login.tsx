import { useLogin } from "@/hooks/login.hook";
import type { LoginPayload } from "@/types/login.type";
import type { FC, JSX } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./login.module.scss";

export const Login: FC = (): JSX.Element => {
    const { register, handleSubmit } = useForm<LoginPayload>();
    const {mutate} = useLogin();
    const onSubmit: SubmitHandler<LoginPayload> = (data: LoginPayload) => {
        mutate(data);
    }

    return (
        <div className={styles.login}>
            <h1 className={styles.title}>Вхід</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.field}>
                    <span>Логін</span>
                    <input
                        type="text"
                        placeholder="Ваш логін"
                        {...register('login', { required: true })}
                        required={true}
                    />
                </label>
                <label className={styles.field}>
                    <span>Пароль</span>
                    <input
                        type="text"
                        placeholder="Ваш пароль"
                        {...register('password', { required: true })}
                        required={true}
                    />
                </label>
                <button type="submit" className={styles.button}>Увійти</button>
            </form>
        </div>
    );
}