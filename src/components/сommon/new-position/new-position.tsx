import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Modal, type ModelProps } from "@/components/ui/modal/modal";
import type { NewPosition as CreatePosition } from "@/types/new-position.type";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router";

export type NewPositionProps = ModelProps & {
    send: (payload: CreatePosition) => void;
}

export const NewPosition: FC<NewPositionProps> = ({ close, isOpen, send }) => {
    const { handleSubmit, register } = useForm<CreatePosition>();
    const onSubmit = (payload: CreatePosition) => {
        send(payload);
        close();
    }
    return (
        <Modal close={close} isOpen={isOpen}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">Нова посада</h1>
                <Field
                    label="Назва посади"
                    required 
                    placeholder="Введіть назву посади"
                    {...register('name', {required: true})}
                />
                <Field
                    label="Оклад посади"
                    required 
                    placeholder="Введіть оклад посади"
                    type="number"
                    min={0}
                    {...register('salary', {required: true})}
                />
                <Button type="submit">Створити посаду</Button>
            </Form>
        </Modal>
    );
}