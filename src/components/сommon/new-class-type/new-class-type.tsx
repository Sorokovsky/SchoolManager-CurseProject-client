import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Form } from "@/components/ui/form/form";
import { Modal, type ModelProps } from "@/components/ui/modal/modal";
import { useNewClassType } from "@/hooks/new-class-type.hook";
import type { NewClassType as CreateClassType } from "@/types/new-class-type.type";
import type { FC } from "react";
import { useForm } from "react-hook-form";

export const NewClassType: FC<ModelProps> = ({ close, isOpen }) => {
    const { handleSubmit, register } = useForm<CreateClassType>();
    const { mutate: createClassType } = useNewClassType();
    const onSubmit = (payload: CreateClassType) => {
        createClassType(payload);
        close();
    }
    return (
        <Modal close={close} isOpen={isOpen}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field
                    required
                    label="Назва типу класу"
                    placeholder="Введіть назву тип класу"
                    {...register("name", {required: true})}
                />
                <Field
                    required
                    label="Опис типу класу"
                    placeholder="Введіть опис тип класу"
                    {...register('description', {required: true})}
                />
                <Button type="submit">Надіслати</Button>
            </Form>
        </ Modal>
    );
}