import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { NewPosition } from "@/components/сommon/new-position/new-position";
import { useDeletePosition } from "@/hooks/delete-position.hook";
import { useNewPosition } from "@/hooks/new-position.hook";
import { usePositions } from "@/hooks/positions.hook";
import { useProfile } from "@/hooks/profile.hook";
import { useState, type FC, type JSX, type ReactNode } from "react";

export const Positions: FC = (): JSX.Element => {
    const { data: positions } = usePositions();
    const { data: profile } = useProfile();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { mutate: addPosition } = useNewPosition();
    const { data: user } = useProfile();
    const { mutate} = useDeletePosition();
    const onClick = () => {
        setIsOpen(true);
    }
    const deletePosition = (id: number) => {
        mutate(id);
    }
    const headers: ReactNode[] = ["Назва посади", "Оклад", "Вимоги", "Відповідальності"];
    const data: ReactNode[][] = positions === undefined ? [] : positions.map(position => [
        position.name,
        position.salary,
        position.requirements
            .map(requirement => <span title={requirement.description} key={requirement.id}>{requirement.name} </span>),
        position.responsibilities
            .map(resposibility => <span title={resposibility.description} key={resposibility.id}>{resposibility.name}  </span>),
        profile.role === "ADMIN" && <Button onClick={() => deletePosition(position.id)} type="button">Видалити</Button>
    ]);
    return (
        <>
            <h1 className="title">Посади</h1>
            <Table headers={headers} data={data} />
            {
                (user && user.role.includes("ADMIN")) && <Button type="button" onClick={onClick}>Нова посада</Button>
            }
            <NewPosition close={() => setIsOpen(false)} isOpen={isOpen} send={addPosition} />
        </>
    );
}