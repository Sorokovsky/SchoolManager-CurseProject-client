import type { Position } from "@/types/position.type"
import type { FC, JSX } from "react";
import styles from "./employee-positions.module.scss";
import { usePositions } from "@/hooks/positions.hook";
import { useAddPosition } from "@/hooks/add-position.hook";
import { useRemovePosition } from "@/hooks/remove-position.hook";

export type EmployeePositionsProps = {
    positions: Position[];
    employeeId: number;
}

export const EmployeePositions: FC<EmployeePositionsProps> = ({ positions, employeeId }): JSX.Element => {
    const { data: allPositions } = usePositions();
    const { mutate: addPosition } = useAddPosition();
    const { mutate: removePosition} = useRemovePosition();
    const onChange = (event) => {
            const value = event.target.value;
            if (value === "null") return;
            const id = Number(value);
            addPosition({ id: employeeId, positionId: id });
        }
    return (
        <div className={styles.flex}>
            {positions.length !== 0 ?
                positions.map((position => (
                    <span key={position.id}>{position.name}
                        <strong onClick={() => removePosition({employeeId: employeeId, positionId: position.id})} className={styles.remove}>-</strong>
                    </span>
                )
                ))
                : <select name="positionId" onChange={onChange}>
                    <option defaultChecked value={"null"}>Не вибрано</option>
                    {allPositions.map((position => {
                        return <option key={position.id} value={position.id}>{position.name}</option>
                    }))}
                </select>
            }
        </div>
    );
};