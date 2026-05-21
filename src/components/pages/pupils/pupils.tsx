import { Table } from "@/components/ui/table/table";
import { usePupils } from "@/hooks/pupils.hook";
import { convertGender } from "@/utils/gender.util";
import type { FC, ReactNode } from "react";

export const Pupils: FC = () => {
    const { data: pupils } = usePupils();
    const headers: ReactNode[] = [
        <>Логін</>,
        <>ПІБ</>,
        <>Стать</>,
        <>День народження</>,
        <>Адреса</>,
        <>Додаткова інформація</>,
        <>Мама</>,
        <>Батько</>,
        <>Клас</>
    ];
    const data: ReactNode[][] = pupils.map(pupil => {
        return [
            pupil.login,
            `${pupil.lastName} ${pupil.firstName} ${pupil.middleName}`,
            convertGender(pupil.gender),
            pupil.birthday.toString(),
            pupil.address,
            pupil.extraInformation,
            `${pupil.mother.lastName} ${pupil.mother.firstName} ${pupil.mother.middleName}`,
            `${pupil.father.lastName} ${pupil.father.firstName} ${pupil.father.middleName}`,
            `${pupil.clazz.studyYear}-${pupil.clazz.letter}`
        ]
    });
    return (
        <>
            <h1 className="title">Учні</h1>
            <Table data={data} headers={headers} />
        </>
    );
}