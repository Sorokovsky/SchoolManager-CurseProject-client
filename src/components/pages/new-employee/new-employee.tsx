import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Form } from "@/components/ui/form/form";
import { useNewEmployee } from "@/hooks/new-employee.hook";
import { useUsers } from "@/hooks/users.hook";
import { employeesPage } from "@/routing/router";
import type { NewEmployee as CreateEmployee } from "@/types/new-employee.type";
import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const NewEmployee: FC = (): JSX.Element => {
    const { register, handleSubmit } = useForm<CreateEmployee>();
    const { data } = useUsers();
    const navigate = useNavigate();
    const { mutate } = useNewEmployee();
    if (!data || data.length == 0) navigate(employeesPage.path);

    const onSubmit = (payload: CreateEmployee) => {
        mutate(payload);
        
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="title">Новий працівник</h1>
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
                {...register("phoneNumber")}
                label="Номер телефон"
                required
                placeholder="Ваш номер телефона"
            />
            <Button type="submit">Створити</Button>
        </Form>
    );
}