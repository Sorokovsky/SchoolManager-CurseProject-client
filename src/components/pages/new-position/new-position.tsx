import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Form } from "@/components/ui/form/form";
import { useNewPosition } from "@/hooks/new-position.hook";
import type { NewPosition as CreatePosition } from "@/types/new-position.type";
import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";

export const NewPosition: FC = (): JSX.Element => {
    const { register, handleSubmit } = useForm<CreatePosition>();
    const { mutate } = useNewPosition();
    const onSubmit = (payload: CreatePosition) => {
        mutate(payload);
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="title">Нова посада</h1>
            <Field
                label="Назва посади"
                placeholder="Введіть назву посади"
                required
                {...register('name', {required: true})}
            />
            <Field
                label="Оклад посади"
                placeholder="Введіть оклад посади"
                required
                type="number"
                min={0}
                {...register('salary', {required: true})}
            />
            <Button type="submit">Створити посаду</Button>
        </Form>
    );
}