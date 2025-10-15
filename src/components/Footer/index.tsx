import { Plus } from "phosphor-react";
import { CreateNewTaskButton, FooterContainer } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTaskModal } from "../NewTaskModal";

export function Footer() {
    return (
        <FooterContainer>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <CreateNewTaskButton>
                        <Plus size={32} />
                    </CreateNewTaskButton>
                </Dialog.Trigger>

                <NewTaskModal />
                
            </Dialog.Root>
            
        </FooterContainer>
    )
}