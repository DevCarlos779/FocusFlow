import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

export function NewTaskModal() {
    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                <Dialog.Title>New Task</Dialog.Title>

                <form action="">
                    <input type="text" placeholder="Task Name" />
                    <input type="text" placeholder="Task Description" />

                    <button type="submit">
                        Create
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}