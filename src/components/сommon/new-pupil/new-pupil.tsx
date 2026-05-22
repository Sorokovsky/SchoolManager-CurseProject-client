import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Modal, type ModelProps } from "@/components/ui/modal/modal";
import { useClasses } from "@/hooks/classes.hook";
import { useCreatePupil } from "@/hooks/create-pupil.hook";
import { useFathers } from "@/hooks/fathers.hook";
import { useMothers } from "@/hooks/mothers.hook";
import { useUsers } from "@/hooks/users.hook";
import type { CreatePupil } from "@/types/create-pupil.type";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router";

export const NewPupil: FC<ModelProps> = ({ close, isOpen }) => {
    const mothers = useMothers();
    const fathers = useFathers();
    const { data: users } = useUsers();
    const { data: classes } = useClasses();
    const { mutate: createPupil } = useCreatePupil();
    const { register, handleSubmit } = useForm<CreatePupil>();
    const onSubmit = (payload: CreatePupil) => {
        createPupil(payload);
        close();
    }
    return (
        <Modal close={close} isOpen={isOpen}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">Новий учень</h1>
                <Field 
                    label="Додаткова інформація про учня"
                    required
                    placeholder="Введіть додаткову інформацію про учня"
                    {...register('extraInformation', { required: true})}
                />
                <label>
                    <span>Матір</span>
                    <select {...register('motherId', { required: true })}>
                        {mothers.map(mother => (
                            <option key={mother.id} value={mother.id}>{`${mother.lastName} ${mother.firstName} ${mother.middleName}`}</option>
                        ))}
                    </select>
                </label>
                <label>
                    <span>Батько</span>
                    <select {...register('fatherId', { required: true })}>
                        {fathers.map(father => (
                            <option key={father.id} value={father.id}>{`${father.lastName} ${father.firstName} ${father.middleName}`}</option>
                        ))}
                    </select>
                </label>
                <label>
                    <span>Користувач</span>
                    <select {...register('userId', { required: true })}>
                        {users === undefined ? [] : users.map(user => (
                            <option key={user.id} value={user.id}>
                                {`${user.lastName} ${user.firstName} ${user.middleName}`}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    <span>Клас</span>
                    <select {...register('classId', { required: true })}>
                        {classes === undefined ? [] : classes.map(clazz => (
                            <option key={clazz.id} value={clazz.id}>{`${clazz.studyYear}-${clazz.letter}`}</option>
                        ))}
                    </select>
                </label>
                <Button type="submit">Відправити</Button>
            </Form>
        </ Modal>
    )
}