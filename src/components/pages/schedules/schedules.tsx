import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { NewSchedule } from "@/components/сommon/new-schedule/new-schedule";
import { useDeleteSchedule } from "@/hooks/delete-schedule.hook";
import { useSchedules } from "@/hooks/schedules.hook";
import { useState, type FC, type JSX, type ReactNode } from "react";

function day(number: number): string {
    switch (number) {
        case 1:
            return "Понеділок"
        case 2:
            return "Вівторок"
        case 3:
            return "Середа"
        case 4:
            return "Четвер"
        case 5:
            return "П'ятниця"
        case 6:
            return "Субота"
        case 7:
            return "Неділя"
        default:
            return "Невідомо"
    }
}

export const Schedules: FC = (): JSX.Element => {
    const { data: schedules } = useSchedules();
    const { mutate: deleteSchedule } = useDeleteSchedule();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const headers: ReactNode[] = [
        <>Клас</>,
        <>Дата</>,
        <>День тиждня</>,
        <>Час початку</>,
        <>Час кінця</>,
        <>Предмет</>
    ];
    
    const data: ReactNode[][] = schedules === undefined ? [] : schedules.map(({clazz, date, dateOfWeek, endTime, startTime, subject, id}) => {
        return [
            `${clazz.studyYear}-${clazz.letter}`,
            date.toString(),
            day(dateOfWeek),
            startTime,
            endTime,
            <span title={`${subject.teacher.lastName} ${subject.teacher.firstName} ${subject.teacher.middleName}`}>{subject.name}</span>,
            <Button type="button" onClick={() => deleteSchedule(id)}>Видалити</Button>
        ]
    });
    return (
        <>
            <h1 className="title">Розклад</h1>
            <Table headers={headers} data={data} />
            <NewSchedule close={() => setIsOpen(false)} isOpen={isOpen} />
            <Button type="button" onClick={() => setIsOpen(true)}>Новий рядок розкладу</Button>
        </>
    );
}
