import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Table } from "@/components/ui/table/table";
import { NewSchedule } from "@/components/сommon/new-schedule/new-schedule";
import { useDeleteSchedule } from "@/hooks/delete-schedule.hook";
import { useProfile } from "@/hooks/profile.hook";
import { usePupilsByParent } from "@/hooks/pupils-by-parent.hook";
import { usePupils } from "@/hooks/pupils.hook";
import { useScheduleByClass } from "@/hooks/schedule-by-class.hook";
import { useSchedules } from "@/hooks/schedules.hook";
import type { Schedule } from "@/types/schedule.type";
import { day } from "@/utils/day.util";
import { useEffect, useState, type FC, type JSX, type ReactNode } from "react";

export const Schedules: FC = (): JSX.Element => {
    const { data: profile } = useProfile();
    const { data: pupils } = usePupils();
    const { data: parentPupils } = usePupilsByParent(profile?.id);
    const [classId, setClassId] = useState<number | null>(null);
    const [date, setDate] = useState<string | null>(null);
    const { data: allSchedules } = useSchedules();
    const { data: schedulesByClass, refetch } = useScheduleByClass(classId);
    const { mutate: deleteSchedule } = useDeleteSchedule();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [schedules, setSchedules] = useState<Schedule[]>(allSchedules);
    const headers: ReactNode[] = [
        <>Клас</>,
        <>Дата</>,
        <>День тиждня</>,
        <>Час початку</>,
        <>Час кінця</>,
        <>Предмет</>
    ];

    useEffect(() => {
    if (profile?.role === "PUPIL") {
        const pupil = pupils?.find(p => p.id === profile?.id); 
        if (pupil?.clazz?.id) {
            setClassId(pupil.clazz.id);
            refetch();
            if (schedulesByClass && schedulesByClass.length > 0) {
                setSchedules(schedulesByClass);
            }
        }
    } else if (profile?.role === "PARENT") {
        const classesId = parentPupils === undefined ? [] : parentPupils.map(p => p.clazz.id);
        setSchedules([])
        for (const classId of classesId) {
            setSchedules(prev => [...prev, ...(allSchedules === undefined ? [] : allSchedules).filter(s => s.clazz.id === classId)])
        }
    }
    else {
        setSchedules(allSchedules);
    }
}, [profile, pupils, schedulesByClass, allSchedules, refetch, parentPupils]);

    const data: ReactNode[][] = schedules === undefined ? [] : schedules.filter(schedule => {
        if (date === null) return true;
        return schedule.date.toString() === date;
    }).map(({
        clazz,
        date,
        dateOfWeek,
        endTime,
        startTime,
        subject,
        id
    }) => {
        return [
            `${clazz.studyYear}-${clazz.letter}`,
            date.toString(),
            day(dateOfWeek),
            startTime,
            endTime,
            <span title={`${subject.teacher.lastName} ${subject.teacher.firstName} ${subject.teacher.middleName}`}>
                {subject.name}
            </span>,
            profile?.role === "ADMIN" && <Button type="button" onClick={() => deleteSchedule(id)}>Видалити</Button>
        ]
    });
    return (
        <>
            <h1 className="title">Розклад</h1>
            <Field
                required
                label="Дата"
                type="date"
                onChange={event => {
                    const date = event.target.value;
                    if (date === "") setDate(null);
                    else setDate(date);
                }}
            />
            <Table headers={headers} data={data} />
            {
                profile?.role === "ADMIN" && (
                    <>
                        <NewSchedule close={() => setIsOpen(false)} isOpen={isOpen} />
                        <Button type="button" onClick={() => setIsOpen(true)}>Новий рядок розкладу</Button>
                    </>
                )
            }
        </>
    );
}
