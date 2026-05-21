import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Form } from "@/components/ui/form/form";
import { Modal, type ModelProps } from "@/components/ui/modal/modal";
import { useNewResponsibility } from "@/hooks/new-responsibility.hook";
import type { CreateResponsibility } from "@/types/create-responsibility.type";
import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";

export const NewResponsibility: FC<ModelProps> = ({ isOpen, close }): JSX.Element => {
    const { handleSubmit, register } = useForm<CreateResponsibility>();
    const {mutate: createResponsibility} = useNewResponsibility();
    const onSubmit = (payload: CreateResponsibility) => {
        createResponsibility(payload);
        close();
    }
    return (
        <Modal isOpen={isOpen} close={close}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">Нова відповідальність</h1>
                <Field
                    required
                    placeholder="Введіть назву відповідальності"
                    label="Назва відповідальність"
                    {...register('name', { required: true })}
                />
                <Field
                    required
                    placeholder="Введіть назву відповідальності"
                    label="Назва відповідальності"
                    {...register('description', { required: true })}
                />
                <Button type='submit'>Створити відповідальність</Button>
            </Form>
        </Modal>
    )
}