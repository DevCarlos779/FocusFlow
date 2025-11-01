import styled from "styled-components";

interface TaskContainerProps {
    statetask: "complete" | "incomplete"
}

export const TaskContainer = styled.div<TaskContainerProps>`
    width: 100%;
    max-width: 800px;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme["purple-500"]};

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    input {
        cursor: pointer;
    }

    strong {
        text-decoration: ${props => props.statetask == "complete" ? "line-through" : "none"};
    }

    
`;