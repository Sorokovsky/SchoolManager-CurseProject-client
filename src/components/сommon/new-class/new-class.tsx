import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Modal, type ModelProps } from "@/components/ui/modal/modal";
import { useClassTypes } from "@/hooks/class-types.hook";
import { useCreateClass } from "@/hooks/create-class.hook";
import { useEmployees } from "@/hooks/employees.hook";
import type { AddClass } from "@/types/add-class.type";
import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router";

export const NewClass: FC<ModelProps> = ({ close, isOpen }): JSX.Element => {
    const { register, handleSubmit } = useForm<AddClass>();
    const { data: employees } = useEmployees();
    const { data: classTypes } = useClassTypes();
    const { mutate: createClass } = useCreateClass();
    const onSubmit = (payload: Omit<AddClass, "createdAtYear" | "studyYear">) => {
        const newClass: AddClass = { ...payload, createdAtYear: new Date().getFullYear(), studyYear: 1 };
        createClass(newClass);
        close();
    }
    return (
        <Modal close={close} isOpen={isOpen}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field
                    required
                    label="Літера класу"
                    placeholder="Введіть літеру класу"
                    minLength={1}
                    maxLength={1}
                    {...register('letter', {required: true})}
                />
                <label>
                <span>Тип класу</span>
                <select name="classTypeId">
                    {classTypes?.map((classType) => {
                        return (
                            <option
                                key={classType.id}
                                {...register('classTypeId', {required: true})}
                                value={classType.id}>
                                {classType.name}
                            </option>
                        )
                    })}
                </select>
                </label>
                <label>
                <span>Класний керівник</span>
                <select name="curatorId">
                    {employees?.map((employee) => {
                        return (
                            <option
                                key={employee.id}
                                {...register('curatorId', {required: true})}
                                value={employee.id}>
                                {employee.lastName} {employee.firstName} {employee.middleName}
                            </option>
                        )
                    })}
                </select>
                </label>
                <Button type="submit">Надіслати</Button>
            </Form>
        </Modal>
    )
}