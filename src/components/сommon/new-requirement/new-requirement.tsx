import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Modal, type ModelProps } from "@/components/ui/modal/modal";
import { useCreateRequirement } from "@/hooks/create-requirement.hook";
import type { CreateRequirement } from "@/types/create-requirement.type";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router";

export const NewRequirement: FC<ModelProps> = ({ isOpen, close }) => {
    const { handleSubmit, register } = useForm<CreateRequirement>();
    const { mutate: createRequirement } = useCreateRequirement();
    const onSubmit = (payload: CreateRequirement) => {
        createRequirement(payload);
        close();
    }
    return (
        <Modal isOpen={isOpen} close={close}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field
                    required
                    placeholder="Введіть назву вимоги"
                    label="Назва вимоги"
                    {...register('name', { required: true })}
                />
                <Field
                    required
                    placeholder="Введіть опис вимоги"
                    label="Опис вимоги"
                    {...register('description', { required: true })}
                />
                <Button>Створити вимогу</Button>
            </Form>
        </Modal>
    );
}