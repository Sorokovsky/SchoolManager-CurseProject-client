import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Modal, type ModelProps } from "@/components/ui/modal/modal";
import { useAddParent } from "@/hooks/add-parent.hook";
import { useUsers } from "@/hooks/users.hook";
import type { AddParent } from "@/types/add-parent.type";
import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router";
import { toast } from "sonner";

export const NewParent: FC<ModelProps> = ({ close, isOpen }): JSX.Element => {
    const { register, handleSubmit } = useForm<AddParent>();
    const { data } = useUsers();
    const { mutate: addParent } = useAddParent();
    const onSubmit = (payload: AddParent) => {
        if (!/\+38[0-9]{10}/.test(payload.phoneNumber)) {
            toast.error("Не правильний формат номера телефону");
            return;
        }
        addParent(payload)
        close();
    }
    return (
        <Modal isOpen={isOpen} close={close}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">Новий батько чи матір</h1>
                <label>
                <span>Користувач</span>
                <select name="userId">
                    {data?.map((user) => {
                        return (
                            <option
                                key={user.id}
                                {...register('userId', {required: true})}
                                value={user.id}>{`${user.lastName} ${user.firstName} ${user.middleName}`}
                            </option>
                        )
                    })}
                </select>
            </label>
                <Field
                    required
                    label="Робота"
                    placeholder="Введіть робоче місце"
                    {...register('job', {required: true})}
                />
                <Field
                    required
                    label="Номер телефлну"
                    placeholder="Введіть номер телефону"
                    {...register('phoneNumber', {required: true})}
                />
                <Button type="submit">Надіслати</Button>
            </Form>
        </ Modal>
    );
}