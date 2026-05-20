import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Form } from "@/components/ui/form/form";
import { Modal } from "@/components/ui/modal/modal";
import type { FC } from "react";
import { useForm } from "react-hook-form";

export type NewPassport = {
    name: string;
    data: string;
}

export type NewPassportProps = {
    send: (payload: NewPassport) => void;
    isOpen: boolean;
    close: () => void;
}

export const NewPassport: FC<NewPassportProps> = ({send, close, isOpen}) => {
    const { register, handleSubmit } = useForm<NewPassport>();
    const onSubmit = (payload: NewPassport) => {
        send(payload);
    }
    return (
        <Modal isOpen={isOpen} close={close}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">Нові паспортні данні</h1>
                <Field
                    required
                    label="Назва паспорту"
                    placeholder="Назва вашого паспорту"
                    {...register('name', {required: true})}
                />
                <Field
                    required
                    label="Данні паспорту"
                    placeholder="Данні вашого паспорту"
                    {...register('data', {required: true})}
                />
                <Button type="submit">Додати паспортні данні</Button>
            </Form>
        </Modal>
    );
}