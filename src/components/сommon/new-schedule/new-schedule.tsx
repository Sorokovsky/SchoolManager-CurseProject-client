import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Form } from "@/components/ui/form/form";
import { Modal, type ModelProps } from "@/components/ui/modal/modal";
import { useClasses } from "@/hooks/classes.hook";
import { useCreateSchedule } from "@/hooks/create-schedule.hook";
import { useSubjects } from "@/hooks/subjects.hook";
import type { CreateSchedule } from "@/types/create-schedule";
import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";

type NewSchedule = {
    subjectId: number;
    classId: number;
    date: Date,
    lessonNumber: number;
}

const lessons: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

function convertLessonToStartTime(lesson: number): string {
    switch (lesson) {
        case 1:
            return "08:30:00";
        case 2:
            return "10:15:00";
        case 3:
            return "11:10:00";
        case 4:
            return "12:05:00";
        case 5:
            return "13:00:00";
        case 6:
            return "13:55:00";
        case 7:
            return "14:50:00";
        case 8:
            return "15:45:00";
        default:
            return "UNKNOWN"
    }
}

function convertLessonToEndTime(lesson: number): string {
    switch (lesson) {
        case 1:
            return "09:05:00";
        case 2:
            return "11:00:00";
        case 3:
            return "11:55:00";
        case 4:
            return "12:50:00";
        case 5:
            return "13:45:00";
        case 6:
            return "14:40:00";
        case 7:
            return "15:35:00";
        case 8:
            return "16:30:00";
        default:
            return "UNKNOWN"
    }
}

export const NewSchedule: FC<ModelProps> = ({ close, isOpen }): JSX.Element => {
    const { register, handleSubmit } = useForm<NewSchedule>();
    const { data: classes } = useClasses();
    const { data: subjects } = useSubjects();
    const { mutate: createSchedule } = useCreateSchedule();
    const onSubmit = (payload: NewSchedule) => {
        const data: CreateSchedule = {
            classId: Number(payload.classId),
            date: payload.date,
            subjectId: Number(payload.subjectId),
            dateOfWeek: new Date(payload.date).getDay() + 1,
            startTime: convertLessonToStartTime(Number(payload.lessonNumber)),
            endTime: convertLessonToEndTime(Number(payload.lessonNumber))
        }
        createSchedule(data);
        close();
    }
    return (
        <Modal close={close} isOpen={isOpen}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">Новий рядок розкладу</h1>
                <label>
                    <span>Клас</span>
                    <select {...register("classId", {required: true})}>
                        {classes?.map(({ id, studyYear, letter }) => (
                            <option value={id}>{studyYear}-{letter}</option>
                        ))}
                    </select>
                </label>
                <label>
                    <span>Предмет</span>
                    <select {...register("subjectId", {required: true})}>
                        {subjects?.map(({ id, name }) => (
                            <option value={id}>{name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    <span>Урок</span>
                    <select {...register("lessonNumber", {required: true})}>
                        {lessons.map((lesson) => (
                            <option value={lesson}>{lesson}-й</option>
                        ))}
                    </select>
                </label>
                <Field
                    required
                    placeholder="Дата"
                    label="Дата"
                    type="date" 
                    {...register('date', {required: true})}
                    />
                <Button type="submit">Надіслати</Button>
            </Form>
        </Modal>
    );
}