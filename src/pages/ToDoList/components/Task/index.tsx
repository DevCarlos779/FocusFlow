import { useContext } from "react";
import { TaskContainer } from "./styles";
import { TasksContext } from "../../../../contexts/TasksContext";

interface TaskProps {
    name: string;
    state: "complete" | "incomplete";
}

export function Task({ name, state }: TaskProps) {

    const isChecked = state == 'complete';

    const {updateTaskState} = useContext(TasksContext);

    function modifyTaskState(e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.checked) {
            updateTaskState({name, state: "complete"});
        } else {
            updateTaskState({name, state: "incomplete"});
        }
    }

    return (
        <TaskContainer statetask={state}>
            <input type="checkbox" name="stateTask" id="stateTask" defaultChecked={isChecked} onChange={modifyTaskState} />
            <strong>{name}</strong>
        </TaskContainer>
    )
}