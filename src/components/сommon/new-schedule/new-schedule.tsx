import { Button } from "@/components/ui/button/button";
import { Form } from "@/components/ui/form/form";
import { Modal, type ModelProps } from "@/components/ui/modal/modal";
import type { FC, JSX } from "react";

export const NewSchedule: FC<ModelProps> = ({ close, isOpen }): JSX.Element => {
    return (
        <Modal close={close} isOpen={isOpen}>
            <Form>
                <h1 className="title">Новий рядок розкладу</h1>
                <Button type="submit">Надіслати</Button>
            </Form>
        </Modal>
    );
}