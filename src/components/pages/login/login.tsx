import { useLogin } from "@/hooks/login.hook";
import type { LoginPayload } from "@/types/login.type";
import type { FC, JSX } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./login.module.scss";
import { Form } from "@/components/ui/form/form";
import { Field } from "@/components/ui/field/field";
import { Button } from "@/components/ui/button/button";

export const Login: FC = (): JSX.Element => {
    const { register, handleSubmit } = useForm<LoginPayload>();
    const {mutate} = useLogin();
    const onSubmit: SubmitHandler<LoginPayload> = (data: LoginPayload) => {
        mutate(data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.title}>Вхід</h1>
            <Field
                type="text"
                label="Логін"
                placeholder="Ваш логін"
                {...register('login', { required: true })}
                required={true}
            />
            <Field
                type="text"
                label="Пароль"
                placeholder="Ваш пароль"
                {...register('password', { required: true })}
                required={true}
            />
                <Button type="submit">Увійти</Button>
        </Form>
    );
}