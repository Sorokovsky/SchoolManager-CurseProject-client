import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { NewSubject } from "@/components/сommon/new-subject/new-subject";
import { useRemoveSubject } from "@/hooks/remove-subject.hook";
import { useSubjects } from "@/hooks/subjects.hook";
import { useState, type FC, type ReactNode } from "react";

export const Subjects: FC = () => {
    const { data: subjects } = useSubjects();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { mutate: removeSubject } = useRemoveSubject();
    const headers: ReactNode[] = [
        <>Назва предмету</>,
        <>Опис предмету</>,
        <>Вчитель</>
    ];
    const data: ReactNode[][] = subjects === undefined ? [] : subjects.map(subject => {
        return [
            subject.name,
            subject.description,
            `${subject.teacher.lastName} ${subject.teacher.firstName} ${subject.teacher.middleName}`,
            <Button type="button" onClick={() => removeSubject(subject.id)}>Видалити</Button>
        ];
    });
    return (
        <>
            <h1 className="title"></h1>
            <Table headers={headers} data={data} />
            <Button type="button" onClick={() => setIsOpen(true)}>Новий предмет</Button>
            <NewSubject close={() => setIsOpen(false)} isOpen={isOpen} />
        </>
    );
}