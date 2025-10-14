import { TaskContainer } from "./styles";

export function Task() {
    return (
        <TaskContainer>
            <input type="checkbox" name="stateTask" id="stateTask" />
            <strong>Nome</strong>
        </TaskContainer>
    )
}