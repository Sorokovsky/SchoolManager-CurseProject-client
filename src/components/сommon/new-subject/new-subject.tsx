import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Form } from "@/components/ui/form/form";
import { Modal, type ModelProps } from "@/components/ui/modal/modal";
import { useAddSubject } from "@/hooks/add-subject.hook";
import { useEmployees } from "@/hooks/employees.hook";
import type { NewSubject as CreateSubject } from "@/types/add-subjec.type";
import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";

export const NewSubject: FC<ModelProps> = ({ close, isOpen }): JSX.Element => {
    const { register, handleSubmit } = useForm<CreateSubject>();
    const { data: employees } = useEmployees();
    const { mutate: createSubject } = useAddSubject();
    const onSubmit = (payload: CreateSubject) => {
        createSubject(payload);
        close();
    }
    return (
        <Modal close={close} isOpen={isOpen}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">Новий предмет</h1>
                <Field
                    required
                    placeholder="Введіть назву предмету"
                    label="Назва предмету"
                    {...register('name', {required: true})}
                />
                <Field
                    required
                    placeholder="Введіть опис предмету"
                    label="Опис предмету"
                    {...register('description', {required: true})}
                />
                <label>
                    <span>Вчитель</span>
                    <select {...register('teacherId', {required: true})}>
                        {employees?.map(employee => {
                            return <option key={employee.id} value={employee.id}>{employee.lastName} {employee.firstName} {employee.middleName}</option>
                        })}
                    </select>
                </label>
                <Button type="submit">Надіслати</Button>
            </Form>
        </Modal>
    );
}