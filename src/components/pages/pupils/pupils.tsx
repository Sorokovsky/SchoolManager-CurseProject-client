import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { NewPupil } from "@/components/сommon/new-pupil/new-pupil";
import { useDeletePupil } from "@/hooks/delete-pupil.hook";
import { usePupils } from "@/hooks/pupils.hook";
import { convertGender } from "@/utils/gender.util";
import { useState, type FC, type ReactNode } from "react";

export const Pupils: FC = () => {
    const { data: pupils } = usePupils();
    const { mutate: deletePupil } = useDeletePupil();
    const [isOpen, setIsOpen] = useState<boolean>(false);
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
    const data: ReactNode[][] = pupils === undefined ? [] : pupils.map(pupil => {
        return [
            pupil.login,
            `${pupil.lastName} ${pupil.firstName} ${pupil.middleName}`,
            convertGender(pupil.gender),
            pupil.birthday.toString(),
            pupil.address,
            pupil.extraInformation,
            `${pupil.mother.lastName} ${pupil.mother.firstName} ${pupil.mother.middleName}`,
            `${pupil.father.lastName} ${pupil.father.firstName} ${pupil.father.middleName}`,
            `${pupil.clazz.studyYear}-${pupil.clazz.letter}`,
            <Button type="button" onClick={() => deletePupil(pupil.id)}>Видалити</Button>
        ]
    });
    return (
        <>
            <h1 className="title">Учні</h1>
            <Table data={data} headers={headers} />

            <Button type="button" onClick={() => setIsOpen(true)}>Додати учня</Button>
            <NewPupil close={() => setIsOpen(false)} isOpen={isOpen} />
        </>
    );
}