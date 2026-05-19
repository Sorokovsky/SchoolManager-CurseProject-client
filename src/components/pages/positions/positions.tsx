import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { usePositions } from "@/hooks/positions.hook";
import { useProfile } from "@/hooks/profile.hook";
import { newPositionsPage } from "@/routing/router";
import type { FC, JSX, ReactNode } from "react";
import { useNavigate } from "react-router";

export const Positions: FC = (): JSX.Element => {
    const { data: positions } = usePositions();
    const { data: user } = useProfile();
    const headers: ReactNode[] = ["Назва посади", "Оклад", "Вимоги", "Відповідальності"];
    const navigate = useNavigate();
    const onClick = () => {
        navigate(newPositionsPage.path)
    }
    const data: ReactNode[][] = positions === undefined ? [] : positions.map(position => [
        position.name,
        position.salary,
        position.requirements
            .map(requirement => <span title={requirement.description} key={requirement.id}>{requirement.name}  </span>),
        position.responsibilities
            .map(resposibility => <span title={resposibility.description} key={resposibility.id}>{resposibility.name}  </span>)
    ]);
    return (
        <>
            <h1 className="title">Посади</h1>
            <Table headers={headers} data={data} />
            {
                user && <Button type="button" onClick={onClick}>Нова посада</Button>
            }
        </>
    );
}