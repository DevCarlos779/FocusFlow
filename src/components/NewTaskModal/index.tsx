import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";

const CreateNewTaskSchema = z.object({
    name: z.string(),
})

type CreateNewTaskInputs = z.infer<typeof CreateNewTaskSchema>

export function NewTaskModal() {

    const {updateTasks} = useContext(TasksContext)

    const {

        reset,
        formState: {
            isSubmitting
        },
        register,
        handleSubmit

    } = useForm<CreateNewTaskInputs>({
        resolver: zodResolver(CreateNewTaskSchema)
    })

    function createNewTask(task: CreateNewTaskInputs) {
        
        updateTasks({name: task.name, state:"incomplete"});

        reset();
    }

    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                <Dialog.Title>New Task</Dialog.Title>

                <form onSubmit={handleSubmit(createNewTask)}>
                    <input 
                        type="text"
                        placeholder="Task Name"
                        {...register('name')}
                        required
                    />

                    <button type="submit" disabled={isSubmitting}>
                        Create
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}

