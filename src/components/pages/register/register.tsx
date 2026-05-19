import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Form } from "@/components/ui/form/form";
import type { RegisterPayload } from "@/types/register.type";
import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import { useRegister } from "@/hooks/register.hook";
import { Gender } from "@/components/ui/gender/gender";

export const Register: FC = (): JSX.Element => {
    const { handleSubmit, register } = useForm<RegisterPayload>();
    const { mutate } = useRegister();
    const onSubmit = (payload: RegisterPayload) => {
        const user = { ...payload, role: "USER" };
        console.log(user);
        
        mutate(user);
        
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1 className={"title"}>Вхід</h1>
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
            <Field
                type="text"
                label="Ім'я"
                placeholder="Ваше ім'я"
                {...register('firstName', { required: true })}
                required={true}
            />
            <Field
                type="text"
                label="Прізвище"
                placeholder="Ваше прізвище"
                {...register('lastName', { required: true })}
                required={true}
            />
            <Field
                type="text"
                label="По батькові"
                placeholder="Ваше по батькові"
                {...register('middleName', { required: true })}
                required={true}
            />
            <Field
                type="text"
                label="Адреса"
                placeholder="Ваша адрес"
                {...register('address', { required: true })}
                required={true}
            />
            <Field
                type="date"
                label="Дата народження"
                placeholder="Ваша дата народження"
                {...register('birthday', { required: true })}
                required={true}
            />
            <Gender name="gender" />
            <Button type="submit">Увійти</Button>
        </Form>
    );
};