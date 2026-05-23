import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { NewPupil } from "@/components/сommon/new-pupil/new-pupil";
import { useDeletePupil } from "@/hooks/delete-pupil.hook";
import { useProfile } from "@/hooks/profile.hook";
import { usePupilsByParent } from "@/hooks/pupils-by-parent.hook";
import { usePupils } from "@/hooks/pupils.hook";
import type { Pupil } from "@/types/pupil.type";
import { convertGender } from "@/utils/gender.util";
import { useEffect, useState, type FC, type ReactNode } from "react";

export const Pupils: FC = () => {
    const { data: allPupils } = usePupils();
    const { data: profile } = useProfile();
    const { mutate: deletePupil } = useDeletePupil();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { data: parentPupils } = usePupilsByParent(profile?.id);
    const [pupils, setPupils] = useState<Pupil[]>(allPupils || []);
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

    useEffect(() => {
        if (profile?.role === "PARENT") {
            setPupils(parentPupils || []);
        }
    }, [parentPupils, profile])
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
            `${pupil.clazz.studyYear}-${pupil.clazz.letter}`,
            profile.role === "ADMIN" && <Button type="button" onClick={() => deletePupil(pupil.id)}>Видалити</Button>
        ];
    });
    return (
        <>
            <h1 className="title">Учні</h1>
            <Table data={data} headers={headers} />

            {profile?.role === "ADMIN" && (
                <>
                    <Button type="button" onClick={() => setIsOpen(true)}>Додати учня</Button>
                    <NewPupil close={() => setIsOpen(false)} isOpen={isOpen} />
                </>
            )}
        </>
    );
}