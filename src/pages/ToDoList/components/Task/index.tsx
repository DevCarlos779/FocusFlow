import { useContext } from "react";
import { TaskContainer } from "./styles";
import { TasksContext } from "../../../../contexts/TasksContext";
import { Trash } from "phosphor-react";

interface TaskProps {
    name: string;
    state: "complete" | "incomplete";
}

export function Task({ name, state }: TaskProps) {

    const {deleteTask} = useContext(TasksContext);

    const isChecked = state == 'complete';

    const {updateTaskState} = useContext(TasksContext);

    function modifyTaskState(e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.checked) {
            updateTaskState({name, state: "complete"});
        } else {
            updateTaskState({name, state: "incomplete"});
        }
    }

    function handleDeleteTask() {
        deleteTask(name);
    }

    return (
        <TaskContainer statetask={state}>
            <div>
                <input type="checkbox" name="stateTask" id="stateTask" defaultChecked={isChecked} onChange={modifyTaskState} />
                <strong>{name}</strong>
            </div>

            <Trash className="trash" size={24} onClick={handleDeleteTask} />
        </TaskContainer>
    )
}